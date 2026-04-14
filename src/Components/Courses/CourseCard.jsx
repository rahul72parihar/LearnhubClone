import React from "react";

export default function CourseCard({
  category,
  categoryColor,
  image,
  title,
  instructor,
  duration,
  students,
  rating,
  price,
}) {
  return (
    <div className="courseCard">
      <div className="courseCardTop">
        <div
          className="courseBadge"
          style={{ "--category-color": categoryColor }}
        >
          {category}
        </div>
        <div className="courseImageWrapper">
          <img src={image} alt={title} />
        </div>
      </div>

      <div className="courseContent">
        <h3>{title}</h3>
        <p className="courseInstructor">{instructor}</p>
        <div className="courseMeta">
          <span>🕒 {duration}</span>
          <span>👥 {students}</span>
          <span>⭐ {rating}</span>
        </div>
        <div className="courseFooter">
          <span className="coursePrice">{price}</span>
          <button className="enrollButton">Enroll now →</button>
        </div>
      </div>
    </div>
  );
}
