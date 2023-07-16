import * as React from "react"
import { cn } from "@yopun-ui/react-classname-utils"
import { getValidChildren } from "@yopun-ui/react-children-utils"

import { ButtonProps } from "./button"

export interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  disabled?: boolean
  size?: ButtonProps["size"]
  variant?: ButtonProps["variant"]
  children?: React.ReactNode
}

export const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  (props, ref) => {
    const { size, variant, disabled, children, className, ...rest } = props

    const validChildren = getValidChildren(children)
    const clones = validChildren.map((child) => {
      return React.cloneElement(child, {
        size: size || child.props.size,
        variant: child.props.variant || variant,
        disabled: child.props.disabled || disabled,
      })
    })

    return (
      <div
        ref={ref}
        role="group"
        className={cn("inline-block", className)}
        {...rest}
      >
        {clones}
      </div>
    )
  },
)
