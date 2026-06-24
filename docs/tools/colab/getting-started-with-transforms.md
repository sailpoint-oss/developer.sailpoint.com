---
id: getting-started-with-transforms
title: Getting Started with Transforms in CoLab
pagination_label: Getting Started with Transforms
sidebar_label: Transforms Guide
sidebar_position: 12
keywords: ['CoLab', 'Transforms', 'ISC']
description: Learn how to download, update, test, and upload CoLab transforms.
slug: /tools/colab/getting-started-with-transforms
tags: ['CoLab']
---

Use this category to view and download Identity Security Cloud (ISC) transforms built by the community.

:::warning
You must update transform inputs to match your Identity Security Cloud environment **before** uploading.
:::

Follow these steps to download and use a transform:

1. Download the transform from the CoLab **Transforms** category.
2. Open the transform in your preferred code editor.
3. Identify and update all inputs (for example, source names and attribute names) to match your environment.
4. Preview and test your modified transform before upload.
5. Upload the transform to your tenant.

## Example

Assume you downloaded a transform with:

- `sourceName`: `CSV Source`
- `attributeName`: `first_name`

If your environment uses:

- `sourceName`: `Active Directory`
- `attributeName`: `FirstName`

Update the transform values before uploading.
