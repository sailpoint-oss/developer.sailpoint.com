---
id: v1-createforminstancerequest
title: Createforminstancerequest
pagination_label: Createforminstancerequest
sidebar_label: Createforminstancerequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Createforminstancerequest', 'V1Createforminstancerequest'] 
slug: /tools/sdk/go/customforms/models/createforminstancerequest
tags: ['SDK', 'Software Development Kit', 'Createforminstancerequest', 'V1Createforminstancerequest']
---

# Createforminstancerequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CreatedBy** | [**Forminstancecreatedby**](forminstancecreatedby) |  | 
**Expire** | **string** | Expire is required | 
**FormDefinitionId** | **string** | FormDefinitionID is the id of the form definition that created this form | 
**FormInput** | Pointer to **map[string]interface{}** | FormInput is an object of form input labels to value | [optional] 
**Recipients** | [**[]Forminstancerecipient**](forminstancerecipient) | Recipients is required | 
**StandAloneForm** | Pointer to **bool** | StandAloneForm is a boolean flag to indicate if this form should be available for users to complete via the standalone form UI or should this only be available to be completed by as an embedded form | [optional] [default to false]
**State** | Pointer to **string** | State is required, if not present initial state is FormInstanceStateAssigned ASSIGNED FormInstanceStateAssigned IN_PROGRESS FormInstanceStateInProgress SUBMITTED FormInstanceStateSubmitted COMPLETED FormInstanceStateCompleted CANCELLED FormInstanceStateCancelled | [optional] 
**Ttl** | Pointer to **int64** | TTL an epoch timestamp in seconds, it most be in seconds or dynamodb will ignore it SEE: https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/time-to-live-ttl-before-you-start.html | [optional] 

## Methods

### NewCreateforminstancerequest

`func NewCreateforminstancerequest(createdBy Forminstancecreatedby, expire string, formDefinitionId string, recipients []Forminstancerecipient, ) *Createforminstancerequest`

NewCreateforminstancerequest instantiates a new Createforminstancerequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateforminstancerequestWithDefaults

`func NewCreateforminstancerequestWithDefaults() *Createforminstancerequest`

NewCreateforminstancerequestWithDefaults instantiates a new Createforminstancerequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCreatedBy

`func (o *Createforminstancerequest) GetCreatedBy() Forminstancecreatedby`

GetCreatedBy returns the CreatedBy field if non-nil, zero value otherwise.

### GetCreatedByOk

`func (o *Createforminstancerequest) GetCreatedByOk() (*Forminstancecreatedby, bool)`

GetCreatedByOk returns a tuple with the CreatedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedBy

`func (o *Createforminstancerequest) SetCreatedBy(v Forminstancecreatedby)`

SetCreatedBy sets CreatedBy field to given value.


### GetExpire

`func (o *Createforminstancerequest) GetExpire() string`

GetExpire returns the Expire field if non-nil, zero value otherwise.

### GetExpireOk

`func (o *Createforminstancerequest) GetExpireOk() (*string, bool)`

GetExpireOk returns a tuple with the Expire field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpire

`func (o *Createforminstancerequest) SetExpire(v string)`

SetExpire sets Expire field to given value.


### GetFormDefinitionId

`func (o *Createforminstancerequest) GetFormDefinitionId() string`

GetFormDefinitionId returns the FormDefinitionId field if non-nil, zero value otherwise.

### GetFormDefinitionIdOk

`func (o *Createforminstancerequest) GetFormDefinitionIdOk() (*string, bool)`

GetFormDefinitionIdOk returns a tuple with the FormDefinitionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormDefinitionId

`func (o *Createforminstancerequest) SetFormDefinitionId(v string)`

SetFormDefinitionId sets FormDefinitionId field to given value.


### GetFormInput

`func (o *Createforminstancerequest) GetFormInput() map[string]interface{}`

GetFormInput returns the FormInput field if non-nil, zero value otherwise.

### GetFormInputOk

`func (o *Createforminstancerequest) GetFormInputOk() (*map[string]interface{}, bool)`

GetFormInputOk returns a tuple with the FormInput field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormInput

`func (o *Createforminstancerequest) SetFormInput(v map[string]interface{})`

SetFormInput sets FormInput field to given value.

### HasFormInput

`func (o *Createforminstancerequest) HasFormInput() bool`

HasFormInput returns a boolean if a field has been set.

### GetRecipients

`func (o *Createforminstancerequest) GetRecipients() []Forminstancerecipient`

GetRecipients returns the Recipients field if non-nil, zero value otherwise.

### GetRecipientsOk

`func (o *Createforminstancerequest) GetRecipientsOk() (*[]Forminstancerecipient, bool)`

GetRecipientsOk returns a tuple with the Recipients field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecipients

`func (o *Createforminstancerequest) SetRecipients(v []Forminstancerecipient)`

SetRecipients sets Recipients field to given value.


### GetStandAloneForm

`func (o *Createforminstancerequest) GetStandAloneForm() bool`

GetStandAloneForm returns the StandAloneForm field if non-nil, zero value otherwise.

### GetStandAloneFormOk

`func (o *Createforminstancerequest) GetStandAloneFormOk() (*bool, bool)`

GetStandAloneFormOk returns a tuple with the StandAloneForm field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStandAloneForm

`func (o *Createforminstancerequest) SetStandAloneForm(v bool)`

SetStandAloneForm sets StandAloneForm field to given value.

### HasStandAloneForm

`func (o *Createforminstancerequest) HasStandAloneForm() bool`

HasStandAloneForm returns a boolean if a field has been set.

### GetState

`func (o *Createforminstancerequest) GetState() string`

GetState returns the State field if non-nil, zero value otherwise.

### GetStateOk

`func (o *Createforminstancerequest) GetStateOk() (*string, bool)`

GetStateOk returns a tuple with the State field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetState

`func (o *Createforminstancerequest) SetState(v string)`

SetState sets State field to given value.

### HasState

`func (o *Createforminstancerequest) HasState() bool`

HasState returns a boolean if a field has been set.

### GetTtl

`func (o *Createforminstancerequest) GetTtl() int64`

GetTtl returns the Ttl field if non-nil, zero value otherwise.

### GetTtlOk

`func (o *Createforminstancerequest) GetTtlOk() (*int64, bool)`

GetTtlOk returns a tuple with the Ttl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTtl

`func (o *Createforminstancerequest) SetTtl(v int64)`

SetTtl sets Ttl field to given value.

### HasTtl

`func (o *Createforminstancerequest) HasTtl() bool`

HasTtl returns a boolean if a field has been set.


