# Problem Statement – Niche Explorer

## 1. Problem
Identifying promising startup ideas, emerging trends and user pain points currently requires manual research across fragmented online communities such as Reddit, specialized blogs and knowledge repositories. Researchers, entrepreneurs, and analysts lack effective tools to systematically detect early signals and emerging research topics before they become mainstream.

## 2. Solution
We propose **Niche Explorer**, a web-based platform designed specifically to uncover and analyze early signals from decentralized online communities. By continuously aggregating content, highlighting rapid growth trends and clustering early-stage research topics, Niche Explorer provides founders, innovators and researchers actionable insights to validate startup ideas, design targeted products and strategically pursue emerging fields of research at their earliest stages.

## 3. User Scenarios
- Researcher: “Highlight preprint keywords in solid‑state batteries with the steepest citation growth in the last 90 days.”
- Founder: “Show fast‑growing keywords in longevity discussions and give me a one‑sentence reason each is trending.”  
- Product lead: “List the top three AI tooling pain points that doubled in Reddit mentions this month.”  

## 4. Core Functions
1. **Track & Count**: Scrape new posts/titles daily; store in a searchable database.  
2. **Keyword Growth**: Calculate frequency deltas; flag keywords whose growth exceeds set thresholds.  
3. **Quick Summaries**: Generate 1–2 sentence explanations for each flagged keyword and summaries of relevant posts using an NLP model.
4. **Topic Charts**: Render line charts and growth tables with filters for time range, source, and category.

## 5. Proposed Microservices
- **Content Ingestion Service**: Scrapes and normalises data from Reddit, niche blogs and arXiv feeds.  
- **Growth Calculation Service**: Computes keyword frequencies and growth rates, also labels exploding topics.  
- **NLP Summary Service**: Generates plain‑language “why it matters” summaries for each flagged keyword.  
- **Trend Dashboard Service**: Serves the frontend, charts, filters and API endpoints for user interaction.  
- **Monitoring & Observability Service**: Integrates Prometheus and Grafana for metrics collection, dashboards, and alerts.
