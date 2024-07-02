---
id: trigger-example-output
title: TriggerExampleOutput
pagination_label: TriggerExampleOutput
sidebar_label: TriggerExampleOutput
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'TriggerExampleOutput'] 
slug: /tools/sdk/go/beta/models/trigger-example-output
tags: ['SDK', 'Software Development Kit', 'TriggerExampleOutput']
---

# TriggerExampleOutput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  **string** | The unique ID of the identity to add to the approver list for the access request. | 
**Name** |  **string** | The name of the identity to add to the approver list for the access request. | 
**Type** |  **map[string]interface{}** | The type of object being referenced. | 
**Approved** |  **bool** | Whether or not to approve the access request. | 
**Comment** |  **string** | A comment about the decision to approve or deny the request. | 
**Approver** |  **string** | The name of the entity that approved or denied the request. | 

## Methods

### NewTriggerExampleOutput

`func NewTriggerExampleOutput(id string, name string, type_ map[string]interface{}, approved bool, comment string, approver string, ) *TriggerExampleOutput`

NewTriggerExampleOutput instantiates a new TriggerExampleOutput object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTriggerExampleOutputWithDefaults

`func NewTriggerExampleOutputWithDefaults() *TriggerExampleOutput`

NewTriggerExampleOutputWithDefaults instantiates a new TriggerExampleOutput object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *TriggerExampleOutput) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *TriggerExampleOutput) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *TriggerExampleOutput) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *TriggerExampleOutput) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *TriggerExampleOutput) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *TriggerExampleOutput) SetName(v string)`

SetName sets Name field to given value.


### GetType

`func (o *TriggerExampleOutput) GetType() map[string]interface{}`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *TriggerExampleOutput) GetTypeOk() (*map[string]interface{}, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *TriggerExampleOutput) SetType(v map[string]interface{})`

SetType sets Type field to given value.


### GetApproved

`func (o *TriggerExampleOutput) GetApproved() bool`

GetApproved returns the Approved field if non-nil, zero value otherwise.

### GetApprovedOk

`func (o *TriggerExampleOutput) GetApprovedOk() (*bool, bool)`

GetApprovedOk returns a tuple with the Approved field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApproved

`func (o *TriggerExampleOutput) SetApproved(v bool)`

SetApproved sets Approved field to given value.


### GetComment

`func (o *TriggerExampleOutput) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *TriggerExampleOutput) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *TriggerExampleOutput) SetComment(v string)`

SetComment sets Comment field to given value.


### GetApprover

`func (o *TriggerExampleOutput) GetApprover() string`

GetApprover returns the Approver field if non-nil, zero value otherwise.

### GetApproverOk

`func (o *TriggerExampleOutput) GetApproverOk() (*string, bool)`

GetApproverOk returns a tuple with the Approver field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprover

`func (o *TriggerExampleOutput) SetApprover(v string)`

SetApprover sets Approver field to given value.



[[Back to top]](#) 


