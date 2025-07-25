---
id: beta-access-item-associated
title: AccessItemAssociated
pagination_label: AccessItemAssociated
sidebar_label: AccessItemAssociated
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccessItemAssociated', 'BetaAccessItemAssociated'] 
slug: /tools/sdk/go/beta/models/access-item-associated
tags: ['SDK', 'Software Development Kit', 'AccessItemAssociated', 'BetaAccessItemAssociated']
---

# AccessItemAssociated

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EventType** | Pointer to **string** | the event type | [optional] 
**DateTime** | Pointer to **string** | the date of event | [optional] 
**IdentityId** | Pointer to **string** | the identity id | [optional] 
**AccessItem** | [**AccessItemAssociatedAccessItem**](access-item-associated-access-item) |  | 
**GovernanceEvent** | [**NullableCorrelatedGovernanceEvent**](correlated-governance-event) |  | 
**AccessItemType** | Pointer to **string** | the access item type | [optional] 

## Methods

### NewAccessItemAssociated

`func NewAccessItemAssociated(accessItem AccessItemAssociatedAccessItem, governanceEvent NullableCorrelatedGovernanceEvent, ) *AccessItemAssociated`

NewAccessItemAssociated instantiates a new AccessItemAssociated object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessItemAssociatedWithDefaults

`func NewAccessItemAssociatedWithDefaults() *AccessItemAssociated`

NewAccessItemAssociatedWithDefaults instantiates a new AccessItemAssociated object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEventType

`func (o *AccessItemAssociated) GetEventType() string`

GetEventType returns the EventType field if non-nil, zero value otherwise.

### GetEventTypeOk

`func (o *AccessItemAssociated) GetEventTypeOk() (*string, bool)`

GetEventTypeOk returns a tuple with the EventType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventType

`func (o *AccessItemAssociated) SetEventType(v string)`

SetEventType sets EventType field to given value.

### HasEventType

`func (o *AccessItemAssociated) HasEventType() bool`

HasEventType returns a boolean if a field has been set.

### GetDateTime

`func (o *AccessItemAssociated) GetDateTime() string`

GetDateTime returns the DateTime field if non-nil, zero value otherwise.

### GetDateTimeOk

`func (o *AccessItemAssociated) GetDateTimeOk() (*string, bool)`

GetDateTimeOk returns a tuple with the DateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDateTime

`func (o *AccessItemAssociated) SetDateTime(v string)`

SetDateTime sets DateTime field to given value.

### HasDateTime

`func (o *AccessItemAssociated) HasDateTime() bool`

HasDateTime returns a boolean if a field has been set.

### GetIdentityId

`func (o *AccessItemAssociated) GetIdentityId() string`

GetIdentityId returns the IdentityId field if non-nil, zero value otherwise.

### GetIdentityIdOk

`func (o *AccessItemAssociated) GetIdentityIdOk() (*string, bool)`

GetIdentityIdOk returns a tuple with the IdentityId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityId

`func (o *AccessItemAssociated) SetIdentityId(v string)`

SetIdentityId sets IdentityId field to given value.

### HasIdentityId

`func (o *AccessItemAssociated) HasIdentityId() bool`

HasIdentityId returns a boolean if a field has been set.

### GetAccessItem

`func (o *AccessItemAssociated) GetAccessItem() AccessItemAssociatedAccessItem`

GetAccessItem returns the AccessItem field if non-nil, zero value otherwise.

### GetAccessItemOk

`func (o *AccessItemAssociated) GetAccessItemOk() (*AccessItemAssociatedAccessItem, bool)`

GetAccessItemOk returns a tuple with the AccessItem field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessItem

`func (o *AccessItemAssociated) SetAccessItem(v AccessItemAssociatedAccessItem)`

SetAccessItem sets AccessItem field to given value.


### GetGovernanceEvent

`func (o *AccessItemAssociated) GetGovernanceEvent() CorrelatedGovernanceEvent`

GetGovernanceEvent returns the GovernanceEvent field if non-nil, zero value otherwise.

### GetGovernanceEventOk

`func (o *AccessItemAssociated) GetGovernanceEventOk() (*CorrelatedGovernanceEvent, bool)`

GetGovernanceEventOk returns a tuple with the GovernanceEvent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGovernanceEvent

`func (o *AccessItemAssociated) SetGovernanceEvent(v CorrelatedGovernanceEvent)`

SetGovernanceEvent sets GovernanceEvent field to given value.


### SetGovernanceEventNil

`func (o *AccessItemAssociated) SetGovernanceEventNil(b bool)`

 SetGovernanceEventNil sets the value for GovernanceEvent to be an explicit nil

### UnsetGovernanceEvent
`func (o *AccessItemAssociated) UnsetGovernanceEvent()`

UnsetGovernanceEvent ensures that no value is present for GovernanceEvent, not even an explicit nil
### GetAccessItemType

`func (o *AccessItemAssociated) GetAccessItemType() string`

GetAccessItemType returns the AccessItemType field if non-nil, zero value otherwise.

### GetAccessItemTypeOk

`func (o *AccessItemAssociated) GetAccessItemTypeOk() (*string, bool)`

GetAccessItemTypeOk returns a tuple with the AccessItemType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessItemType

`func (o *AccessItemAssociated) SetAccessItemType(v string)`

SetAccessItemType sets AccessItemType field to given value.

### HasAccessItemType

`func (o *AccessItemAssociated) HasAccessItemType() bool`

HasAccessItemType returns a boolean if a field has been set.


