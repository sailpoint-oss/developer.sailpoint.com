---
id: v1-accessitemremoved
title: Accessitemremoved
pagination_label: Accessitemremoved
sidebar_label: Accessitemremoved
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Accessitemremoved', 'V1Accessitemremoved'] 
slug: /tools/sdk/go/identityhistory/models/accessitemremoved
tags: ['SDK', 'Software Development Kit', 'Accessitemremoved', 'V1Accessitemremoved']
---

# Accessitemremoved

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessItem** | [**AccessitemassociatedAccessItem**](accessitemassociated-access-item) |  | 
**IdentityId** | Pointer to **string** | the identity id | [optional] 
**EventType** | Pointer to **string** | the event type | [optional] 
**DateTime** | Pointer to **string** | the date of event | [optional] 
**AccessItemType** | Pointer to **string** | the access item type | [optional] 
**GovernanceEvent** | Pointer to [**NullableCorrelatedgovernanceevent**](correlatedgovernanceevent) |  | [optional] 

## Methods

### NewAccessitemremoved

`func NewAccessitemremoved(accessItem AccessitemassociatedAccessItem, ) *Accessitemremoved`

NewAccessitemremoved instantiates a new Accessitemremoved object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessitemremovedWithDefaults

`func NewAccessitemremovedWithDefaults() *Accessitemremoved`

NewAccessitemremovedWithDefaults instantiates a new Accessitemremoved object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccessItem

`func (o *Accessitemremoved) GetAccessItem() AccessitemassociatedAccessItem`

GetAccessItem returns the AccessItem field if non-nil, zero value otherwise.

### GetAccessItemOk

`func (o *Accessitemremoved) GetAccessItemOk() (*AccessitemassociatedAccessItem, bool)`

GetAccessItemOk returns a tuple with the AccessItem field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessItem

`func (o *Accessitemremoved) SetAccessItem(v AccessitemassociatedAccessItem)`

SetAccessItem sets AccessItem field to given value.


### GetIdentityId

`func (o *Accessitemremoved) GetIdentityId() string`

GetIdentityId returns the IdentityId field if non-nil, zero value otherwise.

### GetIdentityIdOk

`func (o *Accessitemremoved) GetIdentityIdOk() (*string, bool)`

GetIdentityIdOk returns a tuple with the IdentityId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityId

`func (o *Accessitemremoved) SetIdentityId(v string)`

SetIdentityId sets IdentityId field to given value.

### HasIdentityId

`func (o *Accessitemremoved) HasIdentityId() bool`

HasIdentityId returns a boolean if a field has been set.

### GetEventType

`func (o *Accessitemremoved) GetEventType() string`

GetEventType returns the EventType field if non-nil, zero value otherwise.

### GetEventTypeOk

`func (o *Accessitemremoved) GetEventTypeOk() (*string, bool)`

GetEventTypeOk returns a tuple with the EventType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventType

`func (o *Accessitemremoved) SetEventType(v string)`

SetEventType sets EventType field to given value.

### HasEventType

`func (o *Accessitemremoved) HasEventType() bool`

HasEventType returns a boolean if a field has been set.

### GetDateTime

`func (o *Accessitemremoved) GetDateTime() string`

GetDateTime returns the DateTime field if non-nil, zero value otherwise.

### GetDateTimeOk

`func (o *Accessitemremoved) GetDateTimeOk() (*string, bool)`

GetDateTimeOk returns a tuple with the DateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDateTime

`func (o *Accessitemremoved) SetDateTime(v string)`

SetDateTime sets DateTime field to given value.

### HasDateTime

`func (o *Accessitemremoved) HasDateTime() bool`

HasDateTime returns a boolean if a field has been set.

### GetAccessItemType

`func (o *Accessitemremoved) GetAccessItemType() string`

GetAccessItemType returns the AccessItemType field if non-nil, zero value otherwise.

### GetAccessItemTypeOk

`func (o *Accessitemremoved) GetAccessItemTypeOk() (*string, bool)`

GetAccessItemTypeOk returns a tuple with the AccessItemType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessItemType

`func (o *Accessitemremoved) SetAccessItemType(v string)`

SetAccessItemType sets AccessItemType field to given value.

### HasAccessItemType

`func (o *Accessitemremoved) HasAccessItemType() bool`

HasAccessItemType returns a boolean if a field has been set.

### GetGovernanceEvent

`func (o *Accessitemremoved) GetGovernanceEvent() Correlatedgovernanceevent`

GetGovernanceEvent returns the GovernanceEvent field if non-nil, zero value otherwise.

### GetGovernanceEventOk

`func (o *Accessitemremoved) GetGovernanceEventOk() (*Correlatedgovernanceevent, bool)`

GetGovernanceEventOk returns a tuple with the GovernanceEvent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGovernanceEvent

`func (o *Accessitemremoved) SetGovernanceEvent(v Correlatedgovernanceevent)`

SetGovernanceEvent sets GovernanceEvent field to given value.

### HasGovernanceEvent

`func (o *Accessitemremoved) HasGovernanceEvent() bool`

HasGovernanceEvent returns a boolean if a field has been set.

### SetGovernanceEventNil

`func (o *Accessitemremoved) SetGovernanceEventNil(b bool)`

 SetGovernanceEventNil sets the value for GovernanceEvent to be an explicit nil

### UnsetGovernanceEvent
`func (o *Accessitemremoved) UnsetGovernanceEvent()`

UnsetGovernanceEvent ensures that no value is present for GovernanceEvent, not even an explicit nil

