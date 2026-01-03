import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface Props {
    id: string;
    title: string;
    image: string;
    downloadNumber: number;
    downloadLink: string;
}

const ResourceCard = ({ id, title, image, downloadNumber, downloadLink }:Props) => {
  return (
   <Card className="w-87.5 border bg-card text-card-foreground">
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
    <CardAction>Card Action</CardAction>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>
  )
}

export default ResourceCard 


 
