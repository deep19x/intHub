import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

function StatCard({ title, value, description, icon }) {
    return (
        <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                    {title}
                </CardTitle>

                <div className="text-primary">
                    {icon}
                </div>
            </CardHeader>

            <CardContent>
                <div className="text-3xl font-bold">
                    {value}
                </div>

                <CardDescription className="mt-2">
                    {description}
                </CardDescription>
            </CardContent>
        </Card>
    );
}

export default StatCard;