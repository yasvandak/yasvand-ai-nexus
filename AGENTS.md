<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Portfolio architecture
- Use TanStack Start with React and TypeScript, not Next.js; preserve the platform’s supported SSR and routing framework.
- Keep résumé-backed content in a shared typed module and render reusable portfolio sections; this prevents factual drift across pages and project dialogs.
- Give each major navigation destination its own file-based route and metadata; this supports accessible navigation and independently shareable pages.
- The contact form creates a mailto draft, never simulates delivery; no sending service is configured.
- Prebundle portfolio motion and Radix UI dependencies with React at startup; avoid late dependency optimization mixing React instances in an open preview.
