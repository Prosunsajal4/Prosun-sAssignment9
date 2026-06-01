import Badge from "./Badge";

const BadgeGroup = ({
  badges = [],
  max = 5,
  size = "md",
  className = "",
}) => {
  const visible = badges.slice(0, max);
  const remaining = badges.length - max;

  return (
    <div className={`flex flex-wrap items-center gap-1.5 ${className}`}>
      {visible.map((badge, index) => (
        <Badge
          key={index}
          color={badge.color || "default"}
          size={size}
          dot={badge.dot}
        >
          {badge.label || badge}
        </Badge>
      ))}
      {remaining > 0 && (
        <Badge color="default" size={size}>
          +{remaining} more
        </Badge>
      )}
    </div>
  );
};

export default BadgeGroup;
