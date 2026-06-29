---
id: v1-clustermanualupgrade
title: Clustermanualupgrade
pagination_label: Clustermanualupgrade
sidebar_label: Clustermanualupgrade
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Clustermanualupgrade', 'V1Clustermanualupgrade'] 
slug: /tools/sdk/go/managedclusters/models/clustermanualupgrade
tags: ['SDK', 'Software Development Kit', 'Clustermanualupgrade', 'V1Clustermanualupgrade']
---

# Clustermanualupgrade

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Jobs** | Pointer to [**[]ClustermanualupgradeJobsInner**](clustermanualupgrade-jobs-inner) | List of job objects for the upgrade request. | [optional] 

## Methods

### NewClustermanualupgrade

`func NewClustermanualupgrade() *Clustermanualupgrade`

NewClustermanualupgrade instantiates a new Clustermanualupgrade object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewClustermanualupgradeWithDefaults

`func NewClustermanualupgradeWithDefaults() *Clustermanualupgrade`

NewClustermanualupgradeWithDefaults instantiates a new Clustermanualupgrade object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetJobs

`func (o *Clustermanualupgrade) GetJobs() []ClustermanualupgradeJobsInner`

GetJobs returns the Jobs field if non-nil, zero value otherwise.

### GetJobsOk

`func (o *Clustermanualupgrade) GetJobsOk() (*[]ClustermanualupgradeJobsInner, bool)`

GetJobsOk returns a tuple with the Jobs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetJobs

`func (o *Clustermanualupgrade) SetJobs(v []ClustermanualupgradeJobsInner)`

SetJobs sets Jobs field to given value.

### HasJobs

`func (o *Clustermanualupgrade) HasJobs() bool`

HasJobs returns a boolean if a field has been set.


