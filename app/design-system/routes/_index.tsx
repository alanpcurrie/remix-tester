import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import {
	Button,
	Card,
	Flex,
	Heading,
	Progress,
	Separator,
	Switch,
	Text,
	TextField,
} from "@radix-ui/themes";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
	return [
		{ title: "Welcome to the Radix themes Design system" },
		{
			name: "description",
			content: "Radix themes Design system",
		},
	];
};

export default function Index() {
	return (
		<Flex direction="column" gap="4" align="center" style={{ padding: "2rem" }}>
			<Heading as="h1" size="6">
				Radix UI Design System Demo
			</Heading>

			<Card>
				<Heading as="h2" size="5">
					Button Example
				</Heading>
				<Button onClick={() => alert("Button clicked!")}>Click Me</Button>
			</Card>

			<Separator my="7" orientation="horizontal" size="4" />

			<Card>
				<Heading as="h2" size="5">
					TextField Example
				</Heading>
				<TextField.Root placeholder="Search the docs…">
					<TextField.Slot>
						<MagnifyingGlassIcon height="16" width="16" />
					</TextField.Slot>
				</TextField.Root>
			</Card>

			<Separator my="7" orientation="horizontal" size="4" />

			<Card>
				<Heading as="h2" size="5">
					Switch Example
				</Heading>
				<Flex align="center" gap="2">
					<Text size="4">Dark Mode:</Text>
					<Switch />
				</Flex>
			</Card>

			<Separator my="7" orientation="horizontal" size="4" />

			<Card>
				<Heading as="h2" size="5">
					Progress Example
				</Heading>
				<Flex direction="column" gap="4" maxWidth="300px">
					<Progress value={25} size="1" />
					<Progress value={50} size="2" />
					<Progress value={75} size="3" />
				</Flex>
			</Card>

			<Separator my="7" orientation="horizontal" size="4" />

			<Card>
				<Heading as="h2" size="5">
					Text Example
				</Heading>
				<Text size="4">This is some text styled with Radix UI Themes.</Text>
			</Card>
			<Separator my="7" orientation="horizontal" size="4" />
		</Flex>
	);
}
