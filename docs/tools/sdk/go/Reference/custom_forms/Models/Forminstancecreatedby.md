---
id: v1-forminstancecreatedby
title: Forminstancecreatedby
pagination_label: Forminstancecreatedby
sidebar_label: Forminstancecreatedby
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Forminstancecreatedby', 'V1Forminstancecreatedby'] 
slug: /tools/sdk/go/customforms/models/forminstancecreatedby
tags: ['SDK', 'Software Development Kit', 'Forminstancecreatedby', 'V1Forminstancecreatedby']
---

# Forminstancecreatedby

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | ID is a unique identifier | [optional] 
**Type** | Pointer to **string** | Type is a form instance created by type enum value WORKFLOW_EXECUTION FormInstanceCreatedByTypeWorkflowExecution SOURCE FormInstanceCreatedByTypeSource | [optional] 

## Methods

### NewForminstancecreatedby

`func NewForminstancecreatedby() *Forminstancecreatedby`

NewForminstancecreatedby instantiates a new Forminstancecreatedby object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewForminstancecreatedbyWithDefaults

`func NewForminstancecreatedbyWithDefaults() *Forminstancecreatedby`

NewForminstancecreatedbyWithDefaults instantiates a new Forminstancecreatedby object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Forminstancecreatedby) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Forminstancecreatedby) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Forminstancecreatedby) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Forminstancecreatedby) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *Forminstancecreatedby) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Forminstancecreatedby) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Forminstancecreatedby) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Forminstancecreatedby) HasType() bool`

HasType returns a boolean if a field has been set.


