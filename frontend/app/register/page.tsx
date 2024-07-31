"use client";
import { register } from "@/apis/auth";
import Heading from "@/components/Heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { registerDefaultValues, registerFields } from "@/lib/fields";
import { registerUserSchema } from "@/lib/validation-schemas";
import { RegisterUser } from "@/types/user";
import { Form, Formik, FormikHelpers } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const RegisterPage = () => {
  const router = useRouter();

  // handle form submission
  const handleSubmit = async (
    values: RegisterUser,
    { setSubmitting, setErrors }: FormikHelpers<RegisterUser>
  ) => {
    setSubmitting(true);
    const res = await register(values);
    if (res.success) {
      toast.success(res.message);
      router.push("/login");
      return;
    }

    setErrors(res.form);
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-[450px] border shadow-lg p-5 rounded-lg">
        <Heading />
        <Formik
          validationSchema={registerUserSchema}
          initialValues={registerDefaultValues}
          onSubmit={handleSubmit}
        >
          {({
            errors,
            handleChange,
            handleBlur,
            values,
            touched,
            isSubmitting,
          }) => (
            <Form className="flex flex-col gap-5">
              {registerFields.map((each, i) => (
                <Input
                  {...each}
                  key={i}
                  error={
                    !!errors[each.name as keyof object] &&
                    !!touched[each.name as keyof object]
                  }
                  value={values[each.name as keyof object]}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  message={errors[each.name as keyof object]}
                />
              ))}
              <Button type="submit" loading={isSubmitting} variant="gradient">
                Register
              </Button>
            </Form>
          )}
        </Formik>
        <p className="text-center my-2">
          Already have an Account?{" "}
          <Link href={"/login"} className="text-primary font-medium">
            Login.
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
