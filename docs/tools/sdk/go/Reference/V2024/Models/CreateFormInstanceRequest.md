---
id: v2024-create-form-instance-request
title: CreateFormInstanceRequest
pagination_label: CreateFormInstanceRequest
sidebar_label: CreateFormInstanceRequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'CreateFormInstanceRequest', 'V2024CreateFormInstanceRequest'] 
slug: /tools/sdk/go/v2024/models/create-form-instance-request
tags: ['SDK', 'Software Development Kit', 'CreateFormInstanceRequest', 'V2024CreateFormInstanceRequest']
---

# CreateFormInstanceRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CreatedBy** | [**FormInstanceCreatedBy**](form-instance-created-by) |  | 
**Expire** | **string** | Expire is required | 
**FormDefinitionId** | **string** | FormDefinitionID is the id of the form definition that created this form | 
**FormInput** | Pointer to **map[string]interface{}** | FormInput is an object of form input labels to value | [optional] 
**Recipients** | [**[]FormInstanceRecipient**](form-instance-recipient) | Recipients is required | 
**StandAloneForm** | Pointer to **bool** | StandAloneForm is a boolean flag to indicate if this form should be available for users to complete via the standalone form UI or should this only be available to be completed by as an embedded form | [optional] [default to false]
**State** | Pointer to **string** | State is required, if not present initial state is FormInstanceStateAssigned ASSIGNED FormInstanceStateAssigned IN_PROGRESS FormInstanceStateInProgress SUBMITTED FormInstanceStateSubmitted COMPLETED FormInstanceStateCompleted CANCELLED FormInstanceStateCancelled | [optional] 
**Ttl** | Pointer to **int64** | TTL an epoch timestamp in seconds, it most be in seconds or dynamodb will ignore it SEE: https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/time-to-live-ttl-before-you-start.html | [optional] 

## Methods

### NewCreateFormInstanceRequest

`func NewCreateFormInstanceRequest(createdBy FormInstanceCreatedBy, expire string, formDefinitionId string, recipients []FormInstanceRecipient, ) *CreateFormInstanceRequest`

NewCreateFormInstanceRequest instantiates a new CreateFormInstanceRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateFormInstanceRequestWithDefaults

`func NewCreateFormInstanceRequestWithDefaults() *CreateFormInstanceRequest`

NewCreateFormInstanceRequestWithDefaults instantiates a new CreateFormInstanceRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCreatedBy

`func (o *CreateFormInstanceRequest) GetCreatedBy() FormInstanceCreatedBy`

GetCreatedBy returns the CreatedBy field if non-nil, zero value otherwise.

### GetCreatedByOk

`func (o *CreateFormInstanceRequest) GetCreatedByOk() (*FormInstanceCreatedBy, bool)`

GetCreatedByOk returns a tuple with the CreatedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedBy

`func (o *CreateFormInstanceRequest) SetCreatedBy(v FormInstanceCreatedBy)`

SetCreatedBy sets CreatedBy field to given value.


### GetExpire

`func (o *CreateFormInstanceRequest) GetExpire() string`

GetExpire returns the Expire field if non-nil, zero value otherwise.

### GetExpireOk

`func (o *CreateFormInstanceRequest) GetExpireOk() (*string, bool)`

GetExpireOk returns a tuple with the Expire field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpire

`func (o *CreateFormInstanceRequest) SetExpire(v string)`

SetExpire sets Expire field to given value.


### GetFormDefinitionId

`func (o *CreateFormInstanceRequest) GetFormDefinitionId() string`

GetFormDefinitionId returns the FormDefinitionId field if non-nil, zero value otherwise.

### GetFormDefinitionIdOk

`func (o *CreateFormInstanceRequest) GetFormDefinitionIdOk() (*string, bool)`

GetFormDefinitionIdOk returns a tuple with the FormDefinitionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormDefinitionId

`func (o *CreateFormInstanceRequest) SetFormDefinitionId(v string)`

SetFormDefinitionId sets FormDefinitionId field to given value.


### GetFormInput

`func (o *CreateFormInstanceRequest) GetFormInput() map[string]interface{}`

GetFormInput returns the FormInput field if non-nil, zero value otherwise.

### GetFormInputOk

`func (o *CreateFormInstanceRequest) GetFormInputOk() (*map[string]interface{}, bool)`

GetFormInputOk returns a tuple with the FormInput field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormInput

`func (o *CreateFormInstanceRequest) SetFormInput(v map[string]interface{})`

SetFormInput sets FormInput field to given value.

### HasFormInput

`func (o *CreateFormInstanceRequest) HasFormInput() bool`

HasFormInput returns a boolean if a field has been set.

### GetRecipients

`func (o *CreateFormInstanceRequest) GetRecipients() []FormInstanceRecipient`

GetRecipients returns the Recipients field if non-nil, zero value otherwise.

### GetRecipientsOk

`func (o *CreateFormInstanceRequest) GetRecipientsOk() (*[]FormInstanceRecipient, bool)`

GetRecipientsOk returns a tuple with the Recipients field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecipients

`func (o *CreateFormInstanceRequest) SetRecipients(v []FormInstanceRecipient)`

SetRecipients sets Recipients field to given value.


### GetStandAloneForm

`func (o *CreateFormInstanceRequest) GetStandAloneForm() bool`

GetStandAloneForm returns the StandAloneForm field if non-nil, zero value otherwise.

### GetStandAloneFormOk

`func (o *CreateFormInstanceRequest) GetStandAloneFormOk() (*bool, bool)`

GetStandAloneFormOk returns a tuple with the StandAloneForm field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStandAloneForm

`func (o *CreateFormInstanceRequest) SetStandAloneForm(v bool)`

SetStandAloneForm sets StandAloneForm field to given value.

### HasStandAloneForm

`func (o *CreateFormInstanceRequest) HasStandAloneForm() bool`

HasStandAloneForm returns a boolean if a field has been set.

### GetState

`func (o *CreateFormInstanceRequest) GetState() string`

GetState returns the State field if non-nil, zero value otherwise.

### GetStateOk

`func (o *CreateFormInstanceRequest) GetStateOk() (*string, bool)`

GetStateOk returns a tuple with the State field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetState

`func (o *CreateFormInstanceRequest) SetState(v string)`

SetState sets State field to given value.

### HasState

`func (o *CreateFormInstanceRequest) HasState() bool`

HasState returns a boolean if a field has been set.

### GetTtl

`func (o *CreateFormInstanceRequest) GetTtl() int64`

GetTtl returns the Ttl field if non-nil, zero value otherwise.

### GetTtlOk

`func (o *CreateFormInstanceRequest) GetTtlOk() (*int64, bool)`

GetTtlOk returns a tuple with the Ttl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTtl

`func (o *CreateFormInstanceRequest) SetTtl(v int64)`

SetTtl sets Ttl field to given value.

### HasTtl

`func (o *CreateFormInstanceRequest) HasTtl() bool`

HasTtl returns a boolean if a field has been set.


