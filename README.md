# Ebooks App

<!-- Badges: add CI / license badges once a pipeline and a LICENSE file exist. -->

A small Angular 20 application to manage a list of ebooks (title, author, price): list, add, edit and delete. It is a learning project demonstrating routing with a lazy-loaded feature module, template-driven forms and a shared service. Data is kept in memory; there is no backend.

## Main features

- Home page ("Welcome to Ebooks App").
- Ebook list (`/ebooks`).
- Add an ebook (`/ebooks/add`).
- Edit an ebook (`/ebooks/edit/:id`).
- Delete an ebook from the list.
- `EbookService` holding the ebooks in an array and notifying changes through an RxJS `Subject`.

## Screenshots / demo

> To be completed: add screenshots of the list, add and edit pages, for example in `./docs/screenshots/`.

```markdown
![Ebook list](./docs/screenshots/ebooks-list.png)
```

## Prerequisites

- **Node.js** and **npm** compatible with Angular 20 (see the [Angular version compatibility table](https://angular.dev/reference/versions))
- *(optional)* Angular CLI 20 installed globally

## Installation

```bash
git clone https://github.com/nour-agrebi-web/Ebook.git
cd Ebook
npm install
```

## Configuration / environment variables

None. The initial data is defined in [src/app/ebooks/ebook-service.ts](./src/app/ebooks/ebook-service.ts).

## Running the project

```bash
npm start
```

Open <http://localhost:4200/>.

Production build (output in `dist/`):

```bash
npm run build
```

## Usage

| Route | Component | Description |
| --- | --- | --- |
| `/` | `Home` | Home page |
| `/ebooks` | `EbooksList` | List of ebooks (lazy-loaded `EbooksModule`) |
| `/ebooks/add` | `EbooksAdd` | Add form |
| `/ebooks/edit/:id` | `EbooksEdit` | Edit form |

Ebook model:

```ts
export interface Ebook {
  id: number;
  title: string;
  author: string;
  price: number;
}
```

Data is reset when the page is reloaded.

## Tests

Unit tests use Karma and Jasmine:

```bash
npm test
```

## Project structure

```text
Ebook/
├── angular.json
├── package.json
└── src/
    ├── index.html, main.ts, styles.css
    └── app/
        ├── app.ts, app.html, app.routes.ts, app.config.ts
        ├── home/                     # Home component
        └── ebooks/
            ├── ebook.ts              # Ebook interface
            ├── ebook-service.ts      # in-memory data + Subject
            ├── ebooks-module.ts      # feature module (FormsModule)
            ├── ebooks-routing-module.ts
            ├── ebooks-list/
            ├── ebooks-add/
            └── ebooks-edit/
```

## Technologies

- Angular 20 (Router, Forms), NgModule-based feature module with lazy loading
- TypeScript 5.9
- RxJS 7.8, zone.js
- Karma + Jasmine

## Deployment

The output of `npm run build` is a static site that can be served by any static web server.

> To be completed: no hosting target is configured.

## Contributing

> To be completed: no contribution guidelines exist.

## License

> To be completed: no `LICENSE` file is present.

## Authors / contacts

- Repository owner: [@nour-agrebi-web](https://github.com/nour-agrebi-web)

> To be completed: full name and contact details.

## Useful resources

- [Angular documentation](https://angular.dev/)
- [Lazy-loading routes](https://angular.dev/guide/routing/common-router-tasks#lazy-loading)
- [Angular CLI reference](https://angular.dev/tools/cli)

## Notes to complete

- `package.json` still uses the name `first-app` (copied from another project); consider renaming it to `ebook`.
- Data is only stored in memory; there is no backend or persistence.
- No screenshots, contribution guide or `LICENSE` file.
