---
id: access-request-context
title: AccessRequestContext
pagination_label: AccessRequestContext
sidebar_label: AccessRequestContext
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'AccessRequestContext'] 
slug: /tools/sdk/go/beta/models/access-request-context
tags: ['SDK', 'Software Development Kit', 'AccessRequestContext']
---

# AccessRequestContext

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequestedContext** |  Pointer to [**[]ContextAttributeDto**](context-attribute-dto) |  | [optional] 
**AssignedContext** |  Pointer to [**[]RoleMatchDto**](role-match-dto) |  | [optional] 

## Methods

### NewAccessRequestContext

`func NewAccessRequestContext() *AccessRequestContext`

NewAccessRequestContext instantiates a new AccessRequestContext object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessRequestContextWithDefaults

`func NewAccessRequestContextWithDefaults() *AccessRequestContext`

NewAccessRequestContextWithDefaults instantiates a new AccessRequestContext object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRequestedContext

`func (o *AccessRequestContext) GetRequestedContext() []ContextAttributeDto`

GetRequestedContext returns the RequestedContext field if non-nil, zero value otherwise.

### GetRequestedContextOk

`func (o *AccessRequestContext) GetRequestedContextOk() (*[]ContextAttributeDto, bool)`

GetRequestedContextOk returns a tuple with the RequestedContext field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedContext

`func (o *AccessRequestContext) SetRequestedContext(v []ContextAttributeDto)`

SetRequestedContext sets RequestedContext field to given value.

### HasRequestedContext

`func (o *AccessRequestContext) HasRequestedContext() bool`

HasRequestedContext returns a boolean if a field has been set.

### GetAssignedContext

`func (o *AccessRequestContext) GetAssignedContext() []RoleMatchDto`

GetAssignedContext returns the AssignedContext field if non-nil, zero value otherwise.

### GetAssignedContextOk

`func (o *AccessRequestContext) GetAssignedContextOk() (*[]RoleMatchDto, bool)`

GetAssignedContextOk returns a tuple with the AssignedContext field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssignedContext

`func (o *AccessRequestContext) SetAssignedContext(v []RoleMatchDto)`

SetAssignedContext sets AssignedContext field to given value.

### HasAssignedContext

`func (o *AccessRequestContext) HasAssignedContext() bool`

HasAssignedContext returns a boolean if a field has been set.


[[Back to top]](#) 


