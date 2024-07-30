"use client";
import { login } from "@/apis/auth";
import Heading from "@/components/Heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { loginDefaultValues, loginFields } from "@/lib/fields";
import { loginUserSchema } from "@/lib/validation-schemas";
import { LoginUser } from "@/types/user";
import { Form, Formik, FormikHelpers } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const LoginPage = () => {
  const router = useRouter();
  const handleSubmit = async (
    values: LoginUser,
    { setSubmitting, setErrors }: FormikHelpers<LoginUser>
  ) => {
    setSubmitting(true);
    const res = await login(values);

    if (res.success) {
      toast.success(res.message);
      router.push("/dashboard");
      return;
    }

    setErrors(res.form);
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-[450px] border shadow-lg p-5 rounded-lg">
        <Heading />
        <Formik
          validationSchema={loginUserSchema}
          initialValues={loginDefaultValues}
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
              {loginFields.map((each, i) => (
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
              <Button type="submit" loading={isSubmitting}>
                Login
              </Button>
            </Form>
          )}
        </Formik>
        <p className="text-center my-2">
          Don&apos;t have an Account?{" "}
          <Link href={"/register"} className="text-primary font-medium">
            create account.
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
