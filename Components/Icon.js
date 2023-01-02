import styled from "@emotion/styled"
import Image from "next/image"

const IconBox = styled.div`
    height: ${props => (props.height ? props.height : '100px')};
    width: ${props => (props.width ? props.width : '80px')};
    position: relative;
    margin: 0;
    padding: 0;
`
const Icon = (props) => {
    return (
        <IconBox {...props}>
            <Image layout={'fill'} objectFit={'contain'} src={props.src}/>
        </IconBox>
    )
}

export default Icon