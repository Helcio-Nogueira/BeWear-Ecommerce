# BeWear Ecommerce

BeWear é uma aplicação de ecommerce desenvolvida com Next.js, TypeScript e Drizzle ORM. O projeto possui autenticação, listagem de produtos, seleção de categorias e uma interface moderna.

## Funcionalidades

- Autenticação de usuários (login, cadastro, login social)
- Listagem de produtos com variantes
- Seleção de categorias
- Layout responsivo e moderno
- Toasts de feedback para ações do usuário

## Estrutura do Projeto

```
src/
	app/
		authentication/
			components/
				sign-in-form.tsx
				sign-up-form.tsx
			page.tsx
		page.tsx
	components/
		common/
			header.tsx
			product-list.tsx
			product-item.tsx
			category-selector.tsx
		ui/
			button.tsx
			card.tsx
			form.tsx
			input.tsx
			label.tsx
			tabs.tsx
	db/
		schema.ts
		index.ts
		seeds.ts
	lib/
		utils.ts
public/
	banner-01.png
	banner-02.png
	...
```

## Tecnologias Utilizadas

- Next.js (App Router)
- TypeScript
- Drizzle ORM
- React Hook Form + Zod
- Tailwind CSS

## Como rodar o projeto

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Configure o banco de dados em `src/db/schema.ts` e rode as seeds se necessário.
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
4. Acesse em [http://localhost:3000](http://localhost:3000)

## Observações

- As imagens devem estar na pasta `public/` e referenciadas com `/nome-da-imagem.png`.
- Os componentes de autenticação usam validação com Zod e feedback via toast.
- O projeto está preparado para receber novas funcionalidades, como carrinho de compras e área do usuário.

## Contribuição

Sinta-se à vontade para abrir issues ou pull requests!

---
