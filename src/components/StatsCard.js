import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
const py = require("../images/python_icon.svg");

export default function StatsCard(props) {
	return (
		<Card style={{ maxWidth: 300, height: 250 }}>
			<CardActionArea>
				<CardContent
					style={{
						height: 150,
					}}
				>
					<CardMedia
						// component="img"
						style={{
							width: 150,
							height: 150,
							// paddingTop: "auto", // 16:9,
							margin: "auto auto auto auto",
							// width: 100,
						}}
						image={props.img_path}
						title={props.title}
					/>
				</CardContent>

				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						{props.value}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}
