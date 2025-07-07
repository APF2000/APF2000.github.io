const translations = {
	en: {
		title: "APF Data Science | Strategic Data Solutions",
		company_name: "APF Data Science",
		nav_services: "Services",
		nav_team: "Team",
		nav_contact: "Contact",
		hero_title: "We Turn Data into Strategic Decisions",
		hero_subtitle: "At APF, we apply AI, machine learning, and predictive analytics to drive intelligent business outcomes.",
		services_title: "Our Services",
		service1_title: "Data Science Consulting",
		service1_desc: "Custom solutions in statistical modeling, analytics, and machine learning tailored to your business.",
		service2_title: "Interactive Dashboards",
		service2_desc: "Data visualization using Power BI, Tableau, and Zoho Analytics for decision-making.",
		service3_title: "Process Automation",
		service3_desc: "Automation with RPA, data scraping, and reporting tools to boost productivity and reduce errors.",
		team_title: "Our Team",
		team_desc: "We are a multidisciplinary team combining statistics, engineering, and business expertise. Our mission is to deliver results through ethics, innovation, and agility.",
		contact_title: "Contact Us",
		contact_desc: "Have a data challenge? Let's talk and find the right solution for your organization.",
		contact_button: "Send Email",
		footer: "© 2025 APF Data Science · CNPJ: 55.678.410/0001-88 · All rights reserved."
	},
	pt: {
		title: "APF Data Science | Soluções Estratégicas em Dados",
		company_name: "APF Data Science",
		nav_services: "Serviços",
		nav_team: "Equipe",
		nav_contact: "Contato",
		hero_title: "Transformamos Dados em Decisões Estratégicas",
		hero_subtitle: "Na APF, aplicamos IA, aprendizado de máquina e análises preditivas para gerar resultados inteligentes.",
		services_title: "Nossos Serviços",
		service1_title: "Consultoria em Data Science",
		service1_desc: "Soluções personalizadas em modelagem estatística, analytics e machine learning para o seu negócio.",
		service2_title: "Dashboards Interativos",
		service2_desc: "Visualização de dados com Power BI, Tableau e Zoho Analytics para apoiar decisões.",
		service3_title: "Automação de Processos",
		service3_desc: "Automatização com RPA, scraping e relatórios para aumentar a produtividade e reduzir erros.",
		team_title: "Nossa Equipe",
		team_desc: "Somos uma equipe multidisciplinar com expertise em estatística, engenharia e negócios. Atuamos com ética, inovação e agilidade para gerar resultados.",
		contact_title: "Fale Conosco",
		contact_desc: "Tem um desafio com dados? Vamos conversar e encontrar a melhor solução para sua organização.",
		contact_button: "Enviar E-mail",
		footer: "© 2025 APF Data Science · CNPJ: 55.678.410/0001-88 · Todos os direitos reservados."
	}
};

const languageSwitcher = document.getElementById("languageSwitcher");

function updateLanguage(lang) {
	document.querySelectorAll("[data-i18n]").forEach(el => {
		const key = el.getAttribute("data-i18n");
		if (translations[lang] && translations[lang][key]) {
			el.textContent = translations[lang][key];
			if (el.tagName === 'TITLE') document.title = translations[lang][key];
		}
	});
}

languageSwitcher.addEventListener("change", (e) => {
	const selectedLang = e.target.value;
	localStorage.setItem("lang", selectedLang);
	updateLanguage(selectedLang);
});

const savedLang = localStorage.getItem("lang") || "en";
languageSwitcher.value = savedLang;
updateLanguage(savedLang);
