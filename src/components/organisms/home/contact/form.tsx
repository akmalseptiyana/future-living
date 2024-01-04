"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/atoms/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/atoms/form";
import { Input } from "@/components/atoms/input";
import { Textarea } from "@/components/atoms/textarea";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  telephone: z.string(),
  email: z.string(),
  message: z.string(),
});

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      telephone: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="align-middle text-xs font-normal leading-6 text-bodyText md:text-[18px] md:leading-[30px]">
                Username
              </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Masukan nama anda disini"
                  className="rounded border-2 border-inputForm px-4 py-2 align-middle text-[10px] font-normal leading-6 text-bodyText placeholder:text-bodyText focus:outline-none md:rounded-lg md:py-4 md:text-base md:leading-[26px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="telephone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="align-middle text-xs font-normal leading-6 text-bodyText md:text-[18px] md:leading-[30px]">
                No Telepon
              </FormLabel>
              <FormControl>
                <Input
                  type="tel"
                  pattern="62-[0-9]{11}"
                  placeholder="Masukan no telepon anda disini: 62-XXXXXXX"
                  className="rounded border-2 border-inputForm px-4 py-2 align-middle text-[10px] font-normal leading-6 text-bodyText placeholder:text-bodyText focus:outline-none md:rounded-lg md:py-4 md:text-base md:leading-[26px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="align-middle text-xs font-normal leading-6 text-bodyText md:text-[18px] md:leading-[30px]">
                Email
              </FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Masukan email anda disini"
                  className="rounded border-2 border-inputForm px-4 py-2 align-middle text-[10px] font-normal leading-6 text-bodyText placeholder:text-bodyText focus:outline-none md:rounded-lg md:py-4 md:text-base md:leading-[26px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="align-middle text-xs font-normal leading-6 text-bodyText md:text-[18px] md:leading-[30px]">
                Pesan
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Masukan Pesan anda Disini"
                  className="h-[112px] rounded border-2 border-inputForm px-4 py-2 align-middle text-[10px] font-normal leading-6 text-bodyText placeholder:text-bodyText focus:outline-none md:h-[160px] md:rounded-lg md:py-4 md:text-base md:leading-[26px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" size="lg" className="mt-3 w-full md:mt-6">
          Kirim
        </Button>
      </form>
    </Form>
  );
}
