---
id: v1-taskreturndetails
title: Taskreturndetails
pagination_label: Taskreturndetails
sidebar_label: Taskreturndetails
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Taskreturndetails', 'V1Taskreturndetails'] 
slug: /tools/sdk/go/applicationdiscovery/models/taskreturndetails
tags: ['SDK', 'Software Development Kit', 'Taskreturndetails', 'V1Taskreturndetails']
---

# Taskreturndetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | Display name of the TaskReturnDetails | 
**AttributeName** | **string** | Attribute the TaskReturnDetails is for | 

## Methods

### NewTaskreturndetails

`func NewTaskreturndetails(name string, attributeName string, ) *Taskreturndetails`

NewTaskreturndetails instantiates a new Taskreturndetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTaskreturndetailsWithDefaults

`func NewTaskreturndetailsWithDefaults() *Taskreturndetails`

NewTaskreturndetailsWithDefaults instantiates a new Taskreturndetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *Taskreturndetails) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Taskreturndetails) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Taskreturndetails) SetName(v string)`

SetName sets Name field to given value.


### GetAttributeName

`func (o *Taskreturndetails) GetAttributeName() string`

GetAttributeName returns the AttributeName field if non-nil, zero value otherwise.

### GetAttributeNameOk

`func (o *Taskreturndetails) GetAttributeNameOk() (*string, bool)`

GetAttributeNameOk returns a tuple with the AttributeName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributeName

`func (o *Taskreturndetails) SetAttributeName(v string)`

SetAttributeName sets AttributeName field to given value.



