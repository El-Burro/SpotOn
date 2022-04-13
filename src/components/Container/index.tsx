import { StyledContainer } from "./style"

type Props = {
    children: React.ReactNode
}

const Container = ({ children }: Props) => (
	<StyledContainer>{children}</StyledContainer>
)

export default Container
