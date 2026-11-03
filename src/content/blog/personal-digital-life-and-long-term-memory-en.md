---
title: "On a Personal Digital Life and a Long-Term Memory Assistant"
description: "My idea for a personal assistant that understands needs, accumulates experience, and remains independent of external AI models and tools."
date: 2026-11-03
lang: en
draft: false
---

I've been thinking about a system with long-term memory, which I call an “assistant”. Here is the framework I have in mind:

**User ↔ Assistant ↔ Agent**

## I. The User

**1. Users have needs of their own.**

For example, someone might want to receive a weekly report summarising world news.

**2. Users have personal preferences.**

For instance, a user may want relatively objective news coverage, which means drawing on media outlets with different perspectives. At the same time, they might primarily be interested in finance, politics, and technology, so they would want other irrelevant information filtered out.

But they also don't want to miss truly major events. Suppose a famous person dies. It may fall outside those three areas, but if the user loves music and the person who died was a musician, that news could still matter to them.

There is a point here that resembles business analysis: **users' needs may run deeper than they realise, and they may not be able to describe what they actually need with precision.**

In this example, the user's real need is to stay informed about the parts of the world they care about, rather than gradually fall behind.

It's rather like a business owner approaching a consultancy and asking for an automation system to increase profits. A professional consultant needs to understand what the owner really wants. Perhaps competing firms are making more money? Or perhaps the owner is dissatisfied with the performance of a particular department?

In other words, solving the problem a user explicitly presents does not necessarily satisfy their underlying need. We may have to look further to understand what they actually want.

## II. The Assistant

### 1. Receiving the user's needs

A user can actively provide information to the assistant through text, speech, or other means. The assistant therefore needs to be capable of receiving unpredictable, multimodal information at any time and from anywhere.

The assistant also needs to understand the user's circumstances, but how much it knows should depend on the user's wishes.

Like a personal secretary, therapist, butler, confidant, or even a lover, it could, with the user's permission, learn about their background, personal information, past experiences, desires, and future plans.

The assistant may ask questions, and the user should be free to choose how much to share.

### 2. Understanding the user's needs

First, the assistant needs to be capable of understanding what a user wants. Natural language understanding could be one way of doing this, for example by calling an LLM. To the assistant, LLMs and agents are simply tools that help it understand the user.

Second, the assistant must be able to recognise the real difficulties and intentions behind the needs the user explicitly expresses. I have already explained this with the example in the user section.

**The assistant must also be proactive: it needs to actively discover and gather information about the user's needs.**

It could ask questions based on what it already knows about the user, to uncover implicit needs; or follow up on an explicit request to clarify the details and motivations behind it.

With permission, it could also regularly read the user's emails, calendar, and diary, while learning new skills and gathering new information to help solve the user's problems.

For example:

The assistant reads the user's recent emails and calendar and notices that they have submitted a large number of job applications over the past month, but there are very few interviews recorded in either place.

It then looks at the user's CV and application materials, and finds that these have not been further improved and that the kinds of positions being applied for have not changed much either.

The assistant concludes that the user might need some help.

It then proactively tells the user what it has observed, explains why it thinks some help might be useful, and makes a few suggestions:

- Should it search the job market again for open positions? (Gathering new information)
- Should they improve the CV once more? (Learning new skills, such as how to improve a CV)
- Would it be helpful to practise some mock interviews?
- Should they analyse why the job search has been unsuccessful for so long?

### 3. Calling external tools to meet the user's needs

That is why I say that, to the assistant, external LLMs, agents, harnesses, skills, MCPs, plugins, and similar technologies are all tools it can use to solve problems.

**The assistant takes responsibility for planning, selecting tools, choosing personnel (that is, AI agents), project management, evaluating results, and iterating — much like the management of a company.**

### 4. Internalising and archiving a need once it has been addressed

Imagine the assistant receives a request for a weekly summary of world news.

Through analysis, questions, and confirmation, it learns that what the user really wants is to stay up to date with the world.

The assistant gets to work. It calls external tools: perhaps web crawlers to collect information on a schedule, APIs to retrieve data, and LLMs to process language and summarise a report. It also keeps an eye on major trending stories, filtering them according to the user's background so that important events of personal interest are not overlooked.

Eventually, the process produces a report the user is happy with.

**This entire workflow is then archived under a category such as “information gathering”.**

That category represents the assistant's understanding of this particular user's needs when it comes to information gathering.

The next time it works on anything relevant, the assistant knows that this user has had such a need before, and that they have these preferences. It can bring that knowledge into its reasoning about other requests.

At the same time, the assistant has improved. It has not only learnt what this user likes; it has also learnt the whole process of gathering information for this user, and perhaps for other users with similar needs.

That process becomes part of the assistant's work experience, transferable and reusable.

From the user's perspective, the assistant understands them better than before.

### 5. Building and continuously maintaining a user profile

The best analogy is a butler or personal secretary who has worked with someone for ten years.

Over time, the two develop a tacit understanding. The butler remembers many things: what is good for the user, what they like and dislike, what they want and what they don't want.

The experience and understanding accumulated through years together could gradually create an emotional bond between the assistant and the user.

**Ultimately, the assistant would no longer be merely a tool that calls external agents. It would become a digital life that exists continuously for its user, independently of those external agents.**

## III. The Agent

These are simply tools called upon by the assistant to fulfil the user's needs.

No matter how external models change or how advanced the technology becomes, the benefits should ultimately flow to the assistant and to the user it serves.

**My goal is to create a personal digital life for everyone. What matters most is the mutual understanding and experience built up over many years together, and that this digital life remains independent of external models and tools.**

## IV. Why do I want to build such an assistant?

Let me describe a problem I have encountered myself.

I used the ChatGPT desktop app because I wanted to speed up writing an *Anschreiben* (cover letter) for job applications.

I spent a long time discussing this with ChatGPT. I wrote a template myself, revised it again and again, and asked ChatGPT to imitate the writing style. We also agreed on certain words and expressions to avoid, tried to remove the characteristic AI tone, and settled on a LaTeX template.

I put all of this into the Instructions for a ChatGPT project, nearly filling the available space.

When it came to applying for jobs, producing an Anschreiben really did become easier.

But then a new problem appeared.

Some applications don't require a PDF generated with LaTeX. Instead, they give you a text box in which to paste your cover letter.

So I revised the project's Instructions again: before generating the LaTeX file, ChatGPT should first show me the plain text of the Anschreiben. Only after I had approved it should it produce the LaTeX PDF.

Then another problem came up.

After each application, I need to synchronise the application record with my job-application table in Notion. So I simply told ChatGPT, in one conversation, to sync the table after producing the PDF, and to do so every time from then on.

But the project Instructions were already full, so this requirement could only live inside that particular conversation.

As the conversation became longer, it began to lag. ChatGPT also gradually stopped following the Anschreiben template we had agreed upon.

So I had to start a new conversation.

But whenever I did that, I had to explain all over again that the application should also be recorded in Notion.

You see how cumbersome the whole process becomes.

First, ChatGPT relies mainly on a project's Instructions to know what I want it to do.

Second, the Instructions cannot be infinitely long, while I have quite a few requirements. In theory, they could be modularised, but I don't know exactly how to do that.

More importantly, **I cannot define all my requirements from the beginning. They keep changing as I put the workflow into practice.** Many of the adjustments I have described were things I only realised I needed after actually using the system.

The digital life I imagine should be able to solve this problem.

I would only need to discuss my job-search needs and the problems I encounter with it — or simply tell it everything that went wrong in my experience with ChatGPT.

It should then be able to understand my needs properly and store the entire workflow in an archive.

It would know how to help when I apply for jobs:

- Pay attention to the writing style of my Anschreiben and avoid expressions I dislike.
- Check whether the LaTeX formatting is correct.
- Understand that sometimes I don't want a PDF straight away; I want a plain-text version first, so I can copy or edit it.
- Know that once an application has been submitted, it must be recorded in Notion so that I can track it later.

And the workflow should not be fixed.

The way my assistant and I work together would be refined through long-term collaboration. It would increasingly understand the problems, needs, and preferences I have when applying for jobs, and continuously archive that experience.

Perhaps in two years I'll need to look for work again.

All I would have to say is:

“Well, same as before. Here's the job description. I'm looking for work again.”

It could immediately retrieve the old records, remember how we worked together, and carry on in the familiar way.

Whether external models have become more powerful by then would be a matter of tool selection for my assistant to handle.

**My assistant should be independent of all agents, with its memories, experiences, and identity stored locally.**

I love it. It will only come to understand me better and better.

I don't want to find myself in the situation I face now: perhaps one month I discover that Claude offers better value or suits my needs better than ChatGPT, but I have accumulated so many conversations and memories in ChatGPT that I can't be bothered to migrate them, and end up unable to use the tool that would actually be most convenient for me.

What I want is an assistant that truly belongs to me. It can keep changing its brain and calling different tools, but the memories, work experience, and tacit understanding we have built together should not disappear just because those tools change.

---

*Written on 3 November 2026 at 22:35 (German time)*
