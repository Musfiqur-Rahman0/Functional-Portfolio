import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SkillCard({ data }) {
  return (
    <Card className="w-full max-w-md shadow-xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <img src={data.logo} alt="React" className="w-6 h-6" />
          {data.pkg}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-2">
          A JavaScript library for building user interfaces.
        </p>

        <div className="flex justify-between text-xs mt-3 text-muted-foreground">
          <span>Daily: {data?.dailyDownloads}</span>
          <span>Weekly: {data?.weeklyDownloads}</span>
          <span>⭐ {data?.githubStars}</span>
        </div>
      </CardContent>

      <div className="h-full w-full">
        {" "}
        {/* <LineChart width={500} height={300} data={downloadData}>
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
        </LineChart> */}
      </div>
    </Card>
  );
}
