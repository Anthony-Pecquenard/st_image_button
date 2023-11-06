import { Streamlit, StreamlitComponentBase, withStreamlitConnection } from "streamlit-component-lib"
import React, { ReactNode } from "react"
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

class ImageButton extends StreamlitComponentBase<any> {
  public render = (): ReactNode => {
    const title = this.props.args["title"]
    const image = this.props.args["image"]

    return (
      <div>
        <h2>{title}</h2>
        <Button variant="outlined"><img src={image} alt = 'Button' width = {'20px'}/></Button>
      </div>
    )
  }
}

export default withStreamlitConnection(ImageButton)
