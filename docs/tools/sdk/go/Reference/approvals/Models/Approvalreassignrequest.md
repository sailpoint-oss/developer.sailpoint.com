---
id: v1-approvalreassignrequest
title: Approvalreassignrequest
pagination_label: Approvalreassignrequest
sidebar_label: Approvalreassignrequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Approvalreassignrequest', 'V1Approvalreassignrequest'] 
slug: /tools/sdk/go/approvals/models/approvalreassignrequest
tags: ['SDK', 'Software Development Kit', 'Approvalreassignrequest', 'V1Approvalreassignrequest']
---

# Approvalreassignrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comment** | Pointer to **string** | Comment associated with the reassign request. | [optional] 
**ReassignFrom** | Pointer to **string** | Identity from which the approval is being reassigned. If left blank, and the approval is currently assigned to the user calling this endpoint, it will use the calling user's identity. If left blank, and the approval is not currently assigned to the user calling this endpoint, you need to be an admin, which would add the reassignTo as a new approver. | [optional] 
**ReassignTo** | Pointer to **string** | Identity to which the approval is being reassigned. | [optional] 

## Methods

### NewApprovalreassignrequest

`func NewApprovalreassignrequest() *Approvalreassignrequest`

NewApprovalreassignrequest instantiates a new Approvalreassignrequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApprovalreassignrequestWithDefaults

`func NewApprovalreassignrequestWithDefaults() *Approvalreassignrequest`

NewApprovalreassignrequestWithDefaults instantiates a new Approvalreassignrequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetComment

`func (o *Approvalreassignrequest) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *Approvalreassignrequest) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *Approvalreassignrequest) SetComment(v string)`

SetComment sets Comment field to given value.

### HasComment

`func (o *Approvalreassignrequest) HasComment() bool`

HasComment returns a boolean if a field has been set.

### GetReassignFrom

`func (o *Approvalreassignrequest) GetReassignFrom() string`

GetReassignFrom returns the ReassignFrom field if non-nil, zero value otherwise.

### GetReassignFromOk

`func (o *Approvalreassignrequest) GetReassignFromOk() (*string, bool)`

GetReassignFromOk returns a tuple with the ReassignFrom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReassignFrom

`func (o *Approvalreassignrequest) SetReassignFrom(v string)`

SetReassignFrom sets ReassignFrom field to given value.

### HasReassignFrom

`func (o *Approvalreassignrequest) HasReassignFrom() bool`

HasReassignFrom returns a boolean if a field has been set.

### GetReassignTo

`func (o *Approvalreassignrequest) GetReassignTo() string`

GetReassignTo returns the ReassignTo field if non-nil, zero value otherwise.

### GetReassignToOk

`func (o *Approvalreassignrequest) GetReassignToOk() (*string, bool)`

GetReassignToOk returns a tuple with the ReassignTo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReassignTo

`func (o *Approvalreassignrequest) SetReassignTo(v string)`

SetReassignTo sets ReassignTo field to given value.

### HasReassignTo

`func (o *Approvalreassignrequest) HasReassignTo() bool`

HasReassignTo returns a boolean if a field has been set.


