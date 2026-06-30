---
id: v1-jitactivationdeactivaterequest
title: Jitactivationdeactivaterequest
pagination_label: Jitactivationdeactivaterequest
sidebar_label: Jitactivationdeactivaterequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Jitactivationdeactivaterequest', 'V1Jitactivationdeactivaterequest'] 
slug: /tools/sdk/go/jitactivations/models/jitactivationdeactivaterequest
tags: ['SDK', 'Software Development Kit', 'Jitactivationdeactivaterequest', 'V1Jitactivationdeactivaterequest']
---

# Jitactivationdeactivaterequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ConnectionId** | **string** | Entitlement connection identifier for the activation to deactivate. | 

## Methods

### NewJitactivationdeactivaterequest

`func NewJitactivationdeactivaterequest(connectionId string, ) *Jitactivationdeactivaterequest`

NewJitactivationdeactivaterequest instantiates a new Jitactivationdeactivaterequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewJitactivationdeactivaterequestWithDefaults

`func NewJitactivationdeactivaterequestWithDefaults() *Jitactivationdeactivaterequest`

NewJitactivationdeactivaterequestWithDefaults instantiates a new Jitactivationdeactivaterequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetConnectionId

`func (o *Jitactivationdeactivaterequest) GetConnectionId() string`

GetConnectionId returns the ConnectionId field if non-nil, zero value otherwise.

### GetConnectionIdOk

`func (o *Jitactivationdeactivaterequest) GetConnectionIdOk() (*string, bool)`

GetConnectionIdOk returns a tuple with the ConnectionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectionId

`func (o *Jitactivationdeactivaterequest) SetConnectionId(v string)`

SetConnectionId sets ConnectionId field to given value.



