import { StyledSub } from "./style"

type Props = {
	children: React.ReactNode
}

const Sub = ({ children }: Props) => <StyledSub>{children}</StyledSub>

export default Sub
