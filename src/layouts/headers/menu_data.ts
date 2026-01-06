interface DataType {
	id: number;
	title: string;
	link: string;
	has_dropdown?: boolean;
	sub_menus?: {
		link: string;
		title: string;
	}[];
}

// menu data
const menu_data: DataType[] = [
	{
		id: 1,
		title: "Início",
		link: "#home", // Alterado para âncora
		has_dropdown: false,
	},
	{
		id: 2,
		title: "Sobre",
		link: "#about", // Já estava correto
		has_dropdown: false,
	},
	{
		id: 3,
		title: "Serviços",
		link: "#services", // Alterado para âncora
		has_dropdown: false,
	},
	{
		id: 4,
		title: "Projetos",
		link: "#projects", // Alterado para âncora
		has_dropdown: true,
		sub_menus: [
			{ link: "#projects-list", title: "Projects List" },
			{ link: "#single-project", title: "Single Portfolio" },
		],
	},
	{
		id: 5,
		title: "Blog",
		link: "#blog", // Alterado para âncora
		has_dropdown: false,
	},
	{
		id: 6,
		title: "Contato",
		link: "#contact", // Alterado para âncora
		has_dropdown: false,
	},
];

export default menu_data;