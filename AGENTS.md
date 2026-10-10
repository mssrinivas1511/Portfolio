# Project architecture rules

- Keep personal portfolio content candidate-led; product details support evidence of ownership and outcomes rather than becoming standalone product documentation.
- Store reusable project and release content in typed data modules so homepage summaries and case-study pages stay consistent.
- Render case-study flows with shared semantic box-and-arrow diagram components so connectors, captions and mobile stacking stay consistent.
- Keep shared site data and the resume CDN asset pointer in a runtime-neutral module; browser download helpers stay separate so agent tools never import frontend dependencies.
- Use lossless WebP for shipped screenshots to reduce transfer size while preserving exact UI detail.