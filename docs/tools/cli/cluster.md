---
id: cli-clusters
title: Clusters
pagination_label: CLI Clusters
sidebar_label: Clusters
sidebar_position: 8
sidebar_class_name: cli-clusters
keywords: ['cli', 'cli clusters', 'clusters']
description: Learn how to use the CLI to manage clusters in this guide.
slug: /tools/cli/cluster
tags: ['CLI']
---

# Clusters

Learn how to use the SailPoint CLI to list manage client managed clusters in this guide.

The `cluster` command makes it easy to manage clusters within the CLI.

- [Clusters](#clusters)
  - [List clusters](#list-clusters)
  - [Get cluster by ID](#get-cluster-by-id)
  - [Get cluster's log configuration](#get-clusters-log-configuration)
  - [Set cluster's log configuration](#set-clusters-log-configuration)

## List clusters

To manage clusters in the SailPoint CLI, you need to know which clusters are available, as well as their IDs. Run this command to list the clusters connected to your tenant:

```shell
sail cluster list
```

This command returns a table of the clusters, along with their IDs.

This command uses the [Get all clusters endpoint](https://developer.sailpoint.com/docs/api/beta/get-managed-clusters).

## Get cluster by ID

Once you have a cluster's ID, you can see view all its details. Run this command to get a cluster by ID:

```shell
sail cluster get {cluster ID}
```

Here is an example command:

```shell
sail cluster get f48e8c9c7dce4672bead8222a767dce7
```

The CLI will return the cluster, along with all its details.

You can also get multiple clusters at once. Here is an example:

```shell
sail cluster get f48e8c9c7dce4672bead8222a767dce7 3652192cc2264ad5827fdc1eb2d88f01
```

This command uses the [Get cluster endpoint](https://developer.sailpoint.com/docs/api/beta/get-managed-cluster).

## Get cluster's log configuration

The VA clusters have logs that track their activity, and you can view these logs' configurations and make changes to them. To get a cluster's log configuration, run this command:

```shell
sail cluster log get {cluster ID}
```

Here is an example:

```shell
sail cluster log get 2c91808580f6cc1a01811af8cf5f18cb
```

This command uses the [Get cluster's log configuration endpoint](https://developer.sailpoint.com/docs/api/beta/get-client-log-configuration).

## Set cluster's log configuration

You can update a cluster's root logging level, the duration of its logging, and the connector logging class. To set a cluster's log configuration, run this command:

This command uses the [Update cluster's log configuration endpoint](https://developer.sailpoint.com/docs/api/beta/put-client-log-configuration).

```shell
sail cluster log set {cluster ID} -r {rootLevel} -d {durationMinutes} -c {connector logging class}
```

Here is an example:

```shell
sail cluster log set 2c91808580f6cc1a01811af8cf5f18cb -r TRACE -d 30 -c sailpoint.connector.ADLDAPConnector=TRACE
```

This example command sets the "TRACE" root logging level, a duration of 30 minutes, and a connector logging class of "sailpoint.connector.ADLDAPConnector=TRACE".

Refer to your respective [connector guide](https://documentation.sailpoint.com/connectors/identitynow/landingpages/help/landingpages/identitynow_connectivity_landing.html) to see which connector logging classes are available.
