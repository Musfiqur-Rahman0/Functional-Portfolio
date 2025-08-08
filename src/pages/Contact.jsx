import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import useAuth from "@/hooks/useAuth";

const Contact = () => {
  const { user } = useAuth();
  const [isSendingMail, setIsSendingMail] = useState(false);

  const {
    control,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: user?.email,
      firstName: "",
      lastName: "",
      subject: "",
      message: "",
    },
  });

  const submitForm = async (data) => {
    setIsSendingMail(true);
    try {
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLETEID,
        {
          to_name: "Musfiqur Rahman",
          user_name: `${data.firstName} ${data.lastName}`,
          user_email: data.email,
          subject: data.subject,
          user_message: data.message,
        },
        import.meta.env.VITE_EMAILJS_PK
      );
      if (result.status === 200) {
        reset();
        toast.success("Message send successfully");
      }
    } catch (error) {
      console.error("Failed to send email:", error);
    } finally {
      setIsSendingMail(false);
    }

    console.log(data);
  };

  useEffect(() => {
    if (user) {
      reset({
        email: user?.email,
      });
    }
  }, [user]);
  return (
    <div className="px-2 md:px-0 w-full   mx-auto lg:px-4 space-y-5 lg:space-y-10">
      <div className="text-center">
        <h2 className="text-2xl lg:text-3xl md:text-4xl font-bold   mb-1">
          Got Something in Mind
        </h2>
        <p className="text-gray-400 text-sm md:text-base mb-8">
          Let’s make it real together.
        </p>
      </div>
      <Card className="grid grid-cols-1 lg:grid-cols-10 items-center gap-5 p-3">
        <Card
          className={
            "relative h-full bg-primary lg:col-span-4  px-5 py-10 text-white overflow-hidden"
          }
        >
          <div className="space-y-5 ">
            <div>
              <h3 className="text-2xl font-bold">Contact Information</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                harum culpa ipsa veritatis facere accusantium minus earum,
              </p>
            </div>

            <div className="flex items-start gap-3">
              <FaPhoneAlt className="mt-1" />
              <div>
                <p className="text-sm">Phone</p>
                <p className="text-md font-semibold">+880 1234 567890</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaEnvelope className="mt-1" />
              <div>
                <p className="text-sm">Email</p>
                <p className="text-md font-semibold">
                  musfiqurrhaman6@email.com
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1" />
              <div>
                <p className="text-sm">Location</p>
                <p className="text-md font-semibold">Rangpur, Bangladesh</p>
              </div>
            </div>

            <div className="h-[150px] lg:h-[130px] w-full ">
              <div className=" h-[250px] w-[250px] absolute -right-10  -bottom-10 border aspect-square  rounded-full bg-gradient-to-br  from-white to-primary shadow-lg"></div>
            </div>
          </div>
        </Card>
        <form
          onSubmit={handleSubmit(submitForm)}
          className="lg:col-span-6 h-full px-4 py-10 space-y-8"
        >
          <div className="flex items-center justify-between gap-5">
            <Controller
              name="firstName"
              control={control}
              rules={{ required: "First name is required" }}
              render={({ field }) => (
                <div className="space-y-1 w-full">
                  <Label className={"text-sm text-gray-400"}>First Name</Label>
                  <Input
                    {...field}
                    className={cn(
                      "w-full text-black  px-0 border-0 border-b-4 border-primary rounded-none",
                      "focus:outline-none focus:ring-0 focus:ring-transparent focus-visible:ring-0 focus-visible:ring-transparent",
                      "focus:border-primary transition-colors duration-200",
                      errors.firstName && "border-b-red-500 "
                    )}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>
              )}
            />
            <Controller
              name="lastName"
              control={control}
              rules={{ required: "Last name is required" }}
              render={({ field }) => (
                <div className="space-y-1 w-full">
                  <Label className={"text-sm text-gray-400"}>First Name</Label>
                  <Input
                    {...field}
                    className={cn(
                      "w-full text-black px-0  border-0 border-b-4 border-primary rounded-none",
                      "focus:outline-none focus:ring-0 focus:ring-transparent focus-visible:ring-0 focus-visible:ring-transparent",
                      "focus:border-primary transition-colors duration-200",
                      errors.lastName && "border-b-red-500 "
                    )}
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              )}
            />
          </div>
          <Controller
            name="email"
            control={control}
            rules={{ required: "Email is required" }}
            render={({ field }) => (
              <div className="space-y-1 w-full">
                <Label className="text-sm text-gray-400">Email</Label>
                <Input
                  {...field}
                  readOnly
                  className={cn(
                    "w-full text-black px-0 border-0 border-b-4 border-primary rounded-none",
                    "focus:outline-none focus:ring-0 focus:ring-transparent focus-visible:ring-0 focus-visible:ring-transparent",
                    "focus:border-primary transition-colors duration-200",
                    errors.email && "border-b-red-500"
                  )}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
            )}
          />

          <Controller
            name="subject"
            control={control}
            rules={{ required: "Subject is required" }}
            render={({ field }) => (
              <div className="space-y-1 w-full">
                <Label className={"text-sm text-gray-400"}>Subject</Label>
                <Input
                  {...field}
                  className={cn(
                    "w-full text-black px-0  border-0 border-b-4 border-primary rounded-none",
                    "focus:outline-none focus:ring-0 focus:ring-transparent focus-visible:ring-0 focus-visible:ring-transparent",
                    "focus:border-primary transition-colors duration-200",
                    errors.subject && "border-b-red-500 "
                  )}
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.subject.message}
                  </p>
                )}
              </div>
            )}
          />
          <Controller
            name="message"
            control={control}
            rules={{ required: "Message is required" }}
            render={({ field }) => (
              <div className="space-y-1 w-full">
                <Label className={"text-sm text-gray-400"}>Message</Label>
                <Textarea
                  {...field}
                  className={cn(
                    "w-full text-black border-0 px-0 border-b-4 border-primary rounded-none",
                    "focus:outline-none focus:ring-0 focus:ring-transparent focus-visible:ring-0 focus-visible:ring-transparent",
                    "focus:border-primary transition-colors duration-200",
                    errors.message && "border-b-red-500"
                  )}
                />

                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>
            )}
          />

          <Button
            type="submit"
            className={"rounded-none font-bold"}
            disabled={isSendingMail}
          >
            {isSendingMail ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Contact;
