# Platform

The Platform provides reusable capabilities shared across every Cyros product.

Products should never implement infrastructure that already exists in the Platform.

## Current Platform Domains

- Identity
- AI
- Notifications
- Analytics
- Payments
- Storage
- Search
- Recommendation
- Messaging
- Gamification
- Media
- Monitoring
- Configuration
- API Gateway

Each domain owns its business logic and public interfaces.

Products consume platform services rather than duplicating functionality.