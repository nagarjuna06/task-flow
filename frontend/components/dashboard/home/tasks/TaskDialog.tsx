import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { taskDefaultValues, taskFields } from "@/lib/fields";
import { cn } from "@/lib/utils";
import { taskSchema } from "@/lib/validation-schemas";
import { CreateTask } from "@/types/task";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { Form, Formik, useFormikContext } from "formik";
import { Maximize2, Minimize2, Plus, Share2, Star, X } from "lucide-react";
import { PropsWithChildren, useEffect, useState } from "react";

type Props = {
  open: boolean;
  onOpenChange: (val: boolean) => void;
  values?: any;
  onSubmit: (values: CreateTask) => void;
} & PropsWithChildren;

const TaskDialog = ({
  open,
  children,
  onOpenChange,
  values = taskDefaultValues,
  onSubmit,
}: Props) => {
  const [fullScreen, setFullScreen] = useState<boolean>(false);
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent
        className={cn("p-3 block", { "max-w-screen h-screen": fullScreen })}
        onInteractOutside={(e) => e.preventDefault()}
      >
        <div className="flex flex-row items-center justify-between w-full">
          <div className="flex gap-4 items-center">
            <X
              size={25}
              className="text-gray-500 cursor-pointer"
              role="button"
              onClick={() => onOpenChange(false)}
            />
            {fullScreen ? (
              <Minimize2
                size={18}
                className="text-gray-500 cursor-pointer"
                role="button"
                onClick={() => setFullScreen(false)}
              />
            ) : (
              <Maximize2
                size={18}
                className="text-gray-500 cursor-pointer"
                role="button"
                onClick={() => setFullScreen(true)}
              />
            )}
          </div>
          <div className="flex gap-2">
            <Button variant="special" className="icon-btn" type="button">
              <span>Share</span>
              <Share2 size={18} />
            </Button>
            <Button variant="special" className="icon-btn" type="button">
              <span>Favorite</span>
              <Star size={18} />
            </Button>
          </div>
        </div>

        <Formik
          validationSchema={taskSchema}
          initialValues={values}
          onSubmit={onSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,

            setFieldValue,
          }) => (
            <Form className="flex flex-col gap-5 px-3 mt-5">
              <Input
                className="text-xl border-none font-semibold "
                name={taskFields[0].name}
                placeholder={taskFields[0].placeholder}
                value={values.title}
                error={!!errors.title && !!touched.title}
                onBlur={handleBlur}
                onChange={handleChange}
                message={errors.title}
              />

              {taskFields.slice(1).map((each, i) => (
                <TaskInput
                  {...each}
                  key={i}
                  value={values[each.name as keyof object]}
                  error={
                    !!errors[each.name as keyof object] &&
                    !!touched[each.name as keyof object]
                  }
                  onBlur={handleBlur}
                  onChange={handleChange}
                  onValueChange={(val: string) =>
                    setFieldValue(each.name as keyof object, val)
                  }
                  message={errors[each.name as keyof object]}
                />
              ))}

              <div className="icon-btn text-black font-semibold">
                <Plus size={20} />
                <span>Add Custom Property</span>
              </div>
              <hr />
              <p>Start writing, or drag your own files here.</p>
              <AutoSubmitForm />
            </Form>
          )}
        </Formik>
      </DialogContent>
    </Dialog>
  );
};

export default TaskDialog;

const TaskInput = (props: any) => {
  const renderSelect = () => {
    return (
      <div>
        <Select
          onValueChange={props.onValueChange}
          defaultValue={props.value}
          value={props.value}
          name={props.name}
        >
          <SelectTrigger className={cn({ "text-red-500": !!props.error })}>
            <SelectValue placeholder="Not Selected" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup className="nagarjun">
              {props?.options?.map((option: any) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <p className="text-red-500">{props.message}</p>
      </div>
    );
  };

  return (
    <div className="grid grid-cols-3">
      <div className="icon-btn text-gray-500">
        <props.Icon size={20} />
        <span>{props.placeholder}</span>
      </div>
      <div className="col-span-2">
        {props.type == "select" ? (
          renderSelect()
        ) : (
          <Input
            {...props}
            Icon={undefined}
            value={props.value}
            onChange={props.onChange}
            onBlur={props.onBlur}
            error={props.error}
            message={props.message}
          />
        )}
      </div>
    </div>
  );
};

const AutoSubmitForm: React.FC = () => {
  const { submitForm, isValidating, dirty } = useFormikContext<CreateTask>();

  useEffect(() => {
    if (isValidating && dirty) {
      submitForm();
    }
  }, [isValidating, submitForm, dirty]);

  return null;
};
