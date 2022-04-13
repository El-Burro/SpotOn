import React from "react"
import { StyledErrorMessage } from "./style"

type Props = {
	children: React.ReactNode
}

const ErrorMessage = ({ children }: Props) => {
	return <StyledErrorMessage>{children}</StyledErrorMessage>
}

export default ErrorMessage
