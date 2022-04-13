import { StyledP } from "./style"

type Props = {
	children: React.ReactNode
}

const P = ({ children }: Props) => <StyledP>{children}</StyledP>

export default P
