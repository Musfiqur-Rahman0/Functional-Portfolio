import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CountUp from "react-countup";
import { FaDownload, FaStar } from "react-icons/fa";
import { motion } from "motion/react";
import { useState } from "react";

export default function SkillCard({ data }) {
  const { daily, monthly } = data?.downloads || {};
  // const [isHovered, setIsHovered] = useState(false);
  // const [position, setPosition] = useState({ x: 0, y: 0 });

  const stars = data?.github?.stars;
  // const handleMouseMove = (e) => {
  //   setPosition({ x: e.clientX, y: e.clientY });
  //   console.log(e.clientX, e.clientY);
  // };

  return (
    <motion.div
      initial={{ scale: 1 }}
      whileHover={{ scale: 0.98 }}
      className="relative group w-full h-full"
      // onMouseEnter={() => setIsHovered(true)}
      // onMouseLeave={() => setIsHovered(false)}
      // onMouseMove={handleMouseMove}
    >
      {/* {isHovered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{
            top: position.y + 15,
            left: position.x + 15,
            position: "fixed",
            pointerEvents: "none",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="z-50 px-2 py-1 bg-black text-white text-sm rounded shadow-lg"
        >
          <p>Learn {data["Package Name"]}</p>
        </motion.div>
      )} */}
      <Card className="relative w-full max-w-md shadow-xl h-full z-10  group-hover:text-white group-hover:[&_.text-muted-foreground]:text-white group-hover:bg-transparent origin-center transition-all  duration-300 ease-linear">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <img
              src={data["Logo"]}
              alt={data["Package Name"]}
              className="w-20 h-20"
            />
            {data["Package Name"]}
          </CardTitle>
        </CardHeader>

        <CardContent>
          <p className="text-sm text-muted-foreground mb-2">
            {data.Description}
          </p>

          {daily > 0 && monthly > 0 && (
            <div className="flex justify-between items-center text-xs mt-3 text-muted-foreground">
              <div className="flex flex-col gap-1 font-extrabold">
                <span className="flex items-center gap-1">
                  <FaDownload />
                  Daily: <CountUp end={daily} duration={2} separator="," />
                </span>
                <span className="flex items-center gap-1">
                  <FaDownload />
                  Monthly:{" "}
                  <CountUp end={monthly} duration={2.5} separator="," />
                </span>
              </div>
              <span className="flex items-center gap-1 font-bold">
                <FaStar className="text-yellow-500" />
                <CountUp end={stars || 0} duration={2} separator="," />
              </span>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
