import React from "react";

type TextVariant = keyof typeof textVariants;

export type TextProps = React.PropsWithChildren<
  {
    variant?: TextVariant;
    Component?: string | React.ComponentType<any>;
  } & React.HTMLAttributes<HTMLSpanElement>
>;
const textVariants = {
  default: "text-slate-900 dark:text-slate-100",
  primary: "text-blue-500 font-bold",
  secondary: "text-slate-500 font-bold",
  info: "text-sky-500 font-bold",
  danger: "text-red-500 font-bold",
  success: "text-green-500 font-bold",
  muted: "text-slate-400",
};

export const Text = ({
  variant = "default",
  Component = "span",
  children,
  ...props
}: TextProps) => {
  const className = textVariants[variant];

  return (
    <Component className={className} {...props}>
      {children}
    </Component>
  );
};
