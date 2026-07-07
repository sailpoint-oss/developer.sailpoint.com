---
id: v1-machineaccountcreaterequestinput
title: Machineaccountcreaterequestinput
pagination_label: Machineaccountcreaterequestinput
sidebar_label: Machineaccountcreaterequestinput
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Machineaccountcreaterequestinput', 'V1Machineaccountcreaterequestinput'] 
slug: /tools/sdk/go/machineaccountcreationrequest/models/machineaccountcreaterequestinput
tags: ['SDK', 'Software Development Kit', 'Machineaccountcreaterequestinput', 'V1Machineaccountcreaterequestinput']
---

# Machineaccountcreaterequestinput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SubtypeId** | **string** | Subtype ID for which machine account create is enabled and user have the entitlement to create the machine account. | 
**FormId** | Pointer to **string** | Form ID selected by user for the machine account create request. | [optional] 
**OwnerIdentityId** | **string** | Owner Identity ID. This identity will be assigned as an owner of the created machine account. | 
**MachineIdentityId** | Pointer to **NullableString** | Machine identity to correlate with the created machine account. If not provided, a new machine identity will be created. | [optional] 
**Environment** | Pointer to **string** | Environment type to use for the machine account. | [optional] 
**Description** | Pointer to **string** | Description for the machine account. | [optional] 
**UserInput** | Pointer to **map[string]interface{}** | Fields of the form linked to the subtype in approval settings. | [optional] 
**EntitlementIds** | Pointer to **[]string** | List of entitlement IDs to provision for created machine account. | [optional] 

## Methods

### NewMachineaccountcreaterequestinput

`func NewMachineaccountcreaterequestinput(subtypeId string, ownerIdentityId string, ) *Machineaccountcreaterequestinput`

NewMachineaccountcreaterequestinput instantiates a new Machineaccountcreaterequestinput object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMachineaccountcreaterequestinputWithDefaults

`func NewMachineaccountcreaterequestinputWithDefaults() *Machineaccountcreaterequestinput`

NewMachineaccountcreaterequestinputWithDefaults instantiates a new Machineaccountcreaterequestinput object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSubtypeId

`func (o *Machineaccountcreaterequestinput) GetSubtypeId() string`

GetSubtypeId returns the SubtypeId field if non-nil, zero value otherwise.

### GetSubtypeIdOk

`func (o *Machineaccountcreaterequestinput) GetSubtypeIdOk() (*string, bool)`

GetSubtypeIdOk returns a tuple with the SubtypeId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubtypeId

`func (o *Machineaccountcreaterequestinput) SetSubtypeId(v string)`

SetSubtypeId sets SubtypeId field to given value.


### GetFormId

`func (o *Machineaccountcreaterequestinput) GetFormId() string`

GetFormId returns the FormId field if non-nil, zero value otherwise.

### GetFormIdOk

`func (o *Machineaccountcreaterequestinput) GetFormIdOk() (*string, bool)`

GetFormIdOk returns a tuple with the FormId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormId

`func (o *Machineaccountcreaterequestinput) SetFormId(v string)`

SetFormId sets FormId field to given value.

### HasFormId

`func (o *Machineaccountcreaterequestinput) HasFormId() bool`

HasFormId returns a boolean if a field has been set.

### GetOwnerIdentityId

`func (o *Machineaccountcreaterequestinput) GetOwnerIdentityId() string`

GetOwnerIdentityId returns the OwnerIdentityId field if non-nil, zero value otherwise.

### GetOwnerIdentityIdOk

`func (o *Machineaccountcreaterequestinput) GetOwnerIdentityIdOk() (*string, bool)`

GetOwnerIdentityIdOk returns a tuple with the OwnerIdentityId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnerIdentityId

`func (o *Machineaccountcreaterequestinput) SetOwnerIdentityId(v string)`

SetOwnerIdentityId sets OwnerIdentityId field to given value.


### GetMachineIdentityId

`func (o *Machineaccountcreaterequestinput) GetMachineIdentityId() string`

GetMachineIdentityId returns the MachineIdentityId field if non-nil, zero value otherwise.

### GetMachineIdentityIdOk

`func (o *Machineaccountcreaterequestinput) GetMachineIdentityIdOk() (*string, bool)`

GetMachineIdentityIdOk returns a tuple with the MachineIdentityId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMachineIdentityId

`func (o *Machineaccountcreaterequestinput) SetMachineIdentityId(v string)`

SetMachineIdentityId sets MachineIdentityId field to given value.

### HasMachineIdentityId

`func (o *Machineaccountcreaterequestinput) HasMachineIdentityId() bool`

HasMachineIdentityId returns a boolean if a field has been set.

### SetMachineIdentityIdNil

`func (o *Machineaccountcreaterequestinput) SetMachineIdentityIdNil(b bool)`

 SetMachineIdentityIdNil sets the value for MachineIdentityId to be an explicit nil

### UnsetMachineIdentityId
`func (o *Machineaccountcreaterequestinput) UnsetMachineIdentityId()`

UnsetMachineIdentityId ensures that no value is present for MachineIdentityId, not even an explicit nil
### GetEnvironment

`func (o *Machineaccountcreaterequestinput) GetEnvironment() string`

GetEnvironment returns the Environment field if non-nil, zero value otherwise.

### GetEnvironmentOk

`func (o *Machineaccountcreaterequestinput) GetEnvironmentOk() (*string, bool)`

GetEnvironmentOk returns a tuple with the Environment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnvironment

`func (o *Machineaccountcreaterequestinput) SetEnvironment(v string)`

SetEnvironment sets Environment field to given value.

### HasEnvironment

`func (o *Machineaccountcreaterequestinput) HasEnvironment() bool`

HasEnvironment returns a boolean if a field has been set.

### GetDescription

`func (o *Machineaccountcreaterequestinput) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Machineaccountcreaterequestinput) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Machineaccountcreaterequestinput) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Machineaccountcreaterequestinput) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetUserInput

`func (o *Machineaccountcreaterequestinput) GetUserInput() map[string]interface{}`

GetUserInput returns the UserInput field if non-nil, zero value otherwise.

### GetUserInputOk

`func (o *Machineaccountcreaterequestinput) GetUserInputOk() (*map[string]interface{}, bool)`

GetUserInputOk returns a tuple with the UserInput field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserInput

`func (o *Machineaccountcreaterequestinput) SetUserInput(v map[string]interface{})`

SetUserInput sets UserInput field to given value.

### HasUserInput

`func (o *Machineaccountcreaterequestinput) HasUserInput() bool`

HasUserInput returns a boolean if a field has been set.

### GetEntitlementIds

`func (o *Machineaccountcreaterequestinput) GetEntitlementIds() []string`

GetEntitlementIds returns the EntitlementIds field if non-nil, zero value otherwise.

### GetEntitlementIdsOk

`func (o *Machineaccountcreaterequestinput) GetEntitlementIdsOk() (*[]string, bool)`

GetEntitlementIdsOk returns a tuple with the EntitlementIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlementIds

`func (o *Machineaccountcreaterequestinput) SetEntitlementIds(v []string)`

SetEntitlementIds sets EntitlementIds field to given value.

### HasEntitlementIds

`func (o *Machineaccountcreaterequestinput) HasEntitlementIds() bool`

HasEntitlementIds returns a boolean if a field has been set.


