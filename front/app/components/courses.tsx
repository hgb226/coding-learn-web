"use client";
import React from "react";
import { People } from "@mui/icons-material";
import {
  Card,
  CardContent,
  CardMedia,
  ListItemIcon,
  MenuItem,
  Rating,
  Typography,
} from "@mui/material";
import Tooltip from "@mui/material/Tooltip";

interface CourseComponentProps {
  id: string;
  image: string;
  name: string;
  views: number;
  rating: number;
}

const Course: React.FC<CourseComponentProps> = ({
  id,
  image,
  name,
  rating,
  views,
}) => {
  return (
    <Tooltip title={`${name}`}>
      <div className="relative w-full rounded-2xl p-4 sm:w-1/2 md:w-1/3 lg:w-1/4">
        <Card className="relative h-full transform shadow-lg transition-transform hover:scale-105">
          <CardMedia
            component="img"
            image={image || "https://placehold.co/600x400/EEE/31343C"}
            alt="course item"
            className="rounded-t-2xl"
          />
          <CardContent className="p-4">
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="text-lg font-semibold"
            >
              {name}
            </Typography>
            <div className="mt-2 flex items-center space-x-4">
              <MenuItem className="flex items-center p-0">
                <ListItemIcon className="mr-2 min-w-0">
                  <People fontSize="small" />
                </ListItemIcon>
                <span className="text-sm">{views} views</span>
              </MenuItem>
              <MenuItem className="flex items-center p-0">
                <ListItemIcon className="mr-2 min-w-0">
                  <Rating
                    name="read-only"
                    value={rating}
                    readOnly
                    precision={0.25}
                  />
                </ListItemIcon>
                <span className="text-sm font-medium">{rating}</span>
              </MenuItem>
            </div>
          </CardContent>
        </Card>
        <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-black bg-opacity-50 opacity-0 transition-opacity hover:opacity-100">
          <button className="rounded-md bg-white px-4 py-2 text-black shadow-md transition-colors hover:bg-gray-200">
            View course
          </button>
        </div>
      </div>
    </Tooltip>
  );
};

export default Course;
