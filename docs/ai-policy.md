---
id: ai-policy
title: AI Usage Policy
description: Guidelines for the responsible use of AI tools in the SailPoint Developer Community.
slug: /ai-policy
unlisted: true
custom_edit_url: null
toc_min_heading_level: 2
toc_max_heading_level: 2
---

<div id="ai-policy-page" class="ai-policy-page-marker" hidden aria-hidden="true"></div>

## Purpose

The SailPoint Community welcomes the responsible use of AI tools as part of the learning and problem-solving process. This policy establishes clear guidelines to ensure AI-generated content maintains the quality, accuracy, and educational value our community is known for.

## Scope

This policy applies to all members of the SailPoint Community, including:

- Community members
- Ambassadors and Expert Ambassadors
- SailPoint employees participating in community discussions
- Partner representatives
- Any person posting content in community forums including chat

## Core Principles

### AI as a Tool, Not a Replacement

Artificial Intelligence tools (including but not limited to ChatGPT, Claude, Copilot, Gemini, and other generative AI platforms) may be used to:

- Assist in research and information gathering
- Help formulate ideas and approaches
- Debug or optimize code
- Learn new concepts or technologies
- Generate initial drafts for further refinement

AI tools should _enhance_ your contribution, not replace your critical thinking, validation, and personal expertise.

---

## Required Practices

### 1. Disclosure Requirement

**All AI-assisted content MUST be clearly disclosed.**

When posting content that was generated or significantly assisted by AI tools, you must:

Include a disclosure statement such as:

- "This response was generated with assistance from [AI tool name] and validated against SailPoint documentation."
- "AI-assisted response - verified against my personal experience with ISC."
- "Generated using [tool] and tested in my sandbox environment."

Place the disclosure at the beginning or end of your post in a clear, visible manner.

**Do not:**

- Post AI-generated content without disclosure
- Use vague attributions like "found this online" when it's AI-generated
- Hide AI usage after being questioned

### 2. Validation Requirement

**You must validate AI-generated information before posting.**

Every AI-assisted contribution must be verified and tested:

Verify against at least one of the following:

- Official SailPoint documentation
- Your personal testing in a sandbox/demo environment
- Established community knowledge or previous solutions
- Vendor documentation (for integrations)
- Your professional experience

Test before providing code solutions:

- Run the code in your environment
- Verify it produces expected results
- Note any limitations or environment-specific requirements

**Do not:**

- Copy-paste AI responses without verification
- Share untested code or configurations
- Assume AI information is accurate without checking

### 3. Value-Add Requirement

**Your contribution must add value beyond the raw AI output.**

Acceptable AI-assisted posts include:

- Your personal context or experience with the solution
- Explanation of _why_ the solution works
- Caveats, limitations, or alternative approaches
- Adaptation to the specific question asked
- Integration with SailPoint-specific best practices

Unacceptable posts:

- Raw copy-paste of AI output with no context
- Generic responses that don't address the specific question
- Unvetted information that may be incorrect
- Responses that simply reformulate existing documentation without insight

### 4. Source Citation Requirement

**AI-generated content must cite sources when making specific claims.**

When AI provides information, you must:

- Request sources from the AI tool
- Verify those sources exist and are accurate
- Include citations in your post (e.g., "According to the ISC API documentation page X…")
- Link to official documentation when available

**Do not:**

- Share AI "hallucinations" (made up facts or documentation)
- Attribute claims without verifiable sources
- Present AI speculation as fact

---

## Prohibited Practices

**The following uses of AI are strictly prohibited and will result in enforcement action.**

### Plagiarism

- Presenting AI-generated content as your own original work
- Copying AI responses without disclosure or attribution
- Using AI to paraphrase others' work without credit

### Low-Effort Content Farming

- Posting multiple AI-generated responses to accumulate points
- Using AI to respond to questions you don't understand
- Generating responses without reading the original question thoroughly

### Misinformation

- Sharing unverified AI output that contains incorrect information
- Posting AI "hallucinations" without fact-checking
- Spreading AI-generated speculation as established fact

### Manipulation

- Using AI to create fake scenarios or problems
- Generating artificial engagement or sockpuppet accounts
- Gaming the points system with AI-generated content

### Harmful Content

- Using AI to generate malicious code
- Creating deceptive or misleading security advice
- Generating content that violates our Code of Conduct

---

## AI Quality Standards

### Good Examples of AI-Assisted Contributions

**Example 1: Code Solution with Context**

```text
*AI-assisted response - validated in my ISC sandbox*

Based on the requirement to transform account data, here's an approach
using a transform. I used AI to help structure the JSON, then tested
it in my environment:

[code block]

Note: This worked in my tenant but you may need to adjust the
attribute mappings based on your source schema. The key is ensuring
the input attribute exists before the transform runs.

Reference: ISC Transform Documentation - [link]
```

**Example 2: Research Assistance**

```text
I asked Claude to help me research OAuth 2.0 flows for this scenario.
After reviewing the SailPoint documentation on OAuth authentication
(https://...), I can confirm
the authorization_code flow is the recommended approach here.

The specific configuration would be: [explanation]

I tested this with Postman and it successfully retrieved tokens.
```

### Bad Examples That Violate This Policy

**Example 1: Raw Copy-Paste**

```text
[Generic AI response about identity governance with no SailPoint
context, no testing, no sources, no disclosure]
```

**Example 2: Unverified Information**

```text
You can use the batchCreateAccounts API endpoint with the parameter
force_sync=true to bulk create users.

[This endpoint doesn't exist - AI hallucination, not verified]
```

**Example 3: Point Farming**

```text
[User posts 15 AI-generated responses in one hour, none tested,
all generic, just to accumulate points]
```

---

## Using AI Effectively

**Best practices when using external AI tools:**

1. **Be specific in your prompts**
   - Include SailPoint product names (ISC, IIQ, File Access Manager, etc.)
   - Mention version numbers when relevant
   - Provide context about your use case

2. **Request sources**
   - Ask AI to cite documentation
   - Verify any URLs or references provided
   - Cross-check against official SailPoint docs

3. **Iterate and refine**
   - Start with AI output as a draft
   - Add your expertise and testing results
   - Customize to the specific question

4. **Check for hallucinations**
   - Verify API endpoints exist
   - Confirm configuration parameters are valid
   - Test code before sharing

---

## Enforcement

### Progressive Enforcement Approach

We believe in education first, but repeat violations will result in escalating consequences.

**First Violation - Reminder**

- Friendly reminder about AI policy via private message
- Post edited or hidden with explanation
- Points earned from violating posts removed

**Second Violation - Warning**

- Official warning sent
- Formal acknowledgment of AI policy required
- Points earned from violating posts removed

**Third Violation - Ban**

- Permanent posting ban
- Account converted to read-only
- Removal from Ambassador program if applicable

### Aggravating Factors

Certain behaviors will result in immediate escalation:

- **Intentional deception** (lying about AI use): Immediate permanent ban
- **Point farming** (including creating multiple accounts): Immediate permanent ban
- **Malicious content** (harmful code, security exploits): Immediate permanent ban

### Appeals Process

If you believe enforcement action was taken in error:

1. Send an email to [compass-help@sailpoint.com](mailto:compass-help@sailpoint.com) within 14 days
2. Provide evidence of your case
3. Appeals reviewed within 5 business days
4. Decision is final after appeal review

---

## Questions & Updates

**Questions about this policy:**

- General questions: Post in the [Community Feedback category](https://developer.sailpoint.com/discuss/c/community-feedback/8)

**Policy updates:** This policy will be reviewed annually and updated as needed.

---

Thank you for helping maintain the quality and integrity of the SailPoint Community!
