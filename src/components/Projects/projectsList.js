import workoutImg from "../../../public/projects/workout-project.png";
import tickexImg from "../../../public/projects/tickex-project.png";
import awsImg from "../../../public/projects/aws_project.jpg";
import metropolitanImg from "../../../public/projects/metropolitan-project.png";

const projects = [
	{
		title: "Workout Tracker Web App",
		image: workoutImg,
		repo: "https://github.com/jpirrotta/WorkoutAppDeployment",
		live: "https://workout-app-deployment.vercel.app/",
		description:
			"Developing (Under Progress) a full-stack web app using Next.js, Clerk Auth, MongoDB, Jotai, Tailwind CSS with Shadcn and Aceternity, Exercise API, and Vercel. The app allows user to view and add exercises to their workout routines. User will also be able to view their workout history and track their progress over time using charts and graphs. The app also offers a way for user to socialize by sharing and viewing other users' workout routines.",
		tags: [
			"Next.js",
			"Clerk Auth",
			"MongoDB",
			"Jotai",
			"Tailwind CSS",
			"Shadcn UI",
			"Aceternity UI",
			"Exercise API",
			"Vercel",
			"Zod",
			"SWR",
			"Jest",
			"CI/CD",
		],
	},
	{
		title: "Events Ticketing Management",
		image: tickexImg,
		repo: "https://github.com/benakram4/Tickex",
		live: "https://tickex.vercel.app/",
		description:
			"Followed MVC principles to design and build a full-stack web app using Django and PostgreSQL, enabling users to buy, sell, and manage events and venues. Showcased problem-solving skills while implementing the relational database tables. Collaborated with team members and showcased strong communication skills to achieve project goals. login with username: user1 and password: user1user1",
		tags: [
			"Django",
			"SQL",
			"PostgreSQL",
			"MVC",
			"Bootstrap",
			"Vercel",
			"Python",
			"DB Schema Design",
		],
	},
	{
		title: "Fragments Full Stack App",
		image: awsImg,
		description:
			"Developed a scalable AWS-deployed microservice for handling text and image fragments. The service offers a REST API for CRUD operations and data conversion, with Next.js for front-end interaction. The project, developed on GitHub, includes a CI pipeline with Jest and Hurl for testing.",
		tags: [
			"Docker",
			"AWS Cognito",
			"Amplify",
			"ECS",
			"ECR",
			"S3",
			"DynamoDB",
			"Next.js",
			"Tailwind",
			"Jest",
			"Hurl",
      "CI/CD",
		],
	},
	{
		title: "Metropolitan Museum Gallery",
		image: metropolitanImg,
		repo: "https://github.com/benakram4/metropolitan_museum",
		live: "https://metropolitanmuseum.vercel.app/",
		description:
			"Built a user-friendly Next.js web app for users to browse and save favorite items from the Metropolitan Museum Gallery API. Secured user authentication using bcrypt and stored data in MongoDB. Demonstrated high degree of self-motivation and diligence, independently driving the project to completion ahead of the anticipated timeline.",
		tags: ["Next.js", "bcrypt", "Auth", "MongoDB", "Bootstrap", "Vercel", "API"],
	},
];

export default projects;
