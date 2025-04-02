---
id: template-dto
title: TemplateDto
pagination_label: TemplateDto
sidebar_label: TemplateDto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'TemplateDto', 'TemplateDto'] 
slug: /tools/sdk/go//models/template-dto
tags: ['SDK', 'Software Development Kit', 'TemplateDto', 'TemplateDto']
---

# TemplateDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Key** | **string** | The key of the template | 
**Name** | Pointer to **string** | The name of the Task Manager Subscription | [optional] 
**Medium** | **string** | The message medium. More mediums may be added in the future. | 
**Locale** | **string** | The locale for the message text, a BCP 47 language tag. | 
**Subject** | Pointer to **string** | The subject line in the template | [optional] 
**Header** | Pointer to **NullableString** | The header value is now located within the body field. If included with non-null values, will result in a 400. | [optional] 
**Body** | Pointer to **string** | The body in the template | [optional] 
**Footer** | Pointer to **NullableString** | The footer value is now located within the body field. If included with non-null values, will result in a 400. | [optional] 
**From** | Pointer to **string** | The \"From:\" address in the template | [optional] 
**ReplyTo** | Pointer to **string** | The \"Reply To\" line in the template | [optional] 
**Description** | Pointer to **string** | The description in the template | [optional] 
**Id** | Pointer to **string** | This is auto-generated. | [optional] 
**Created** | Pointer to **SailPointTime** | The time when this template is created. This is auto-generated. | [optional] 
**Modified** | Pointer to **SailPointTime** | The time when this template was last modified. This is auto-generated. | [optional] 
**SlackTemplate** | Pointer to **NullableString** |  | [optional] 
**TeamsTemplate** | Pointer to **NullableString** |  | [optional] 

## Methods

### NewTemplateDto

`func NewTemplateDto(key string, medium string, locale string, ) *TemplateDto`

NewTemplateDto instantiates a new TemplateDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTemplateDtoWithDefaults

`func NewTemplateDtoWithDefaults() *TemplateDto`

NewTemplateDtoWithDefaults instantiates a new TemplateDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetKey

`func (o *TemplateDto) GetKey() string`

GetKey returns the Key field if non-nil, zero value otherwise.

### GetKeyOk

`func (o *TemplateDto) GetKeyOk() (*string, bool)`

GetKeyOk returns a tuple with the Key field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKey

`func (o *TemplateDto) SetKey(v string)`

SetKey sets Key field to given value.


### GetName

`func (o *TemplateDto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *TemplateDto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *TemplateDto) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *TemplateDto) HasName() bool`

HasName returns a boolean if a field has been set.

### GetMedium

`func (o *TemplateDto) GetMedium() string`

GetMedium returns the Medium field if non-nil, zero value otherwise.

### GetMediumOk

`func (o *TemplateDto) GetMediumOk() (*string, bool)`

GetMediumOk returns a tuple with the Medium field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMedium

`func (o *TemplateDto) SetMedium(v string)`

SetMedium sets Medium field to given value.


### GetLocale

`func (o *TemplateDto) GetLocale() string`

GetLocale returns the Locale field if non-nil, zero value otherwise.

### GetLocaleOk

`func (o *TemplateDto) GetLocaleOk() (*string, bool)`

GetLocaleOk returns a tuple with the Locale field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocale

`func (o *TemplateDto) SetLocale(v string)`

SetLocale sets Locale field to given value.


### GetSubject

`func (o *TemplateDto) GetSubject() string`

GetSubject returns the Subject field if non-nil, zero value otherwise.

### GetSubjectOk

`func (o *TemplateDto) GetSubjectOk() (*string, bool)`

GetSubjectOk returns a tuple with the Subject field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubject

`func (o *TemplateDto) SetSubject(v string)`

SetSubject sets Subject field to given value.

### HasSubject

`func (o *TemplateDto) HasSubject() bool`

HasSubject returns a boolean if a field has been set.

### GetHeader

`func (o *TemplateDto) GetHeader() string`

GetHeader returns the Header field if non-nil, zero value otherwise.

### GetHeaderOk

`func (o *TemplateDto) GetHeaderOk() (*string, bool)`

GetHeaderOk returns a tuple with the Header field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHeader

`func (o *TemplateDto) SetHeader(v string)`

SetHeader sets Header field to given value.

### HasHeader

`func (o *TemplateDto) HasHeader() bool`

HasHeader returns a boolean if a field has been set.

### SetHeaderNil

`func (o *TemplateDto) SetHeaderNil(b bool)`

 SetHeaderNil sets the value for Header to be an explicit nil

### UnsetHeader
`func (o *TemplateDto) UnsetHeader()`

UnsetHeader ensures that no value is present for Header, not even an explicit nil
### GetBody

`func (o *TemplateDto) GetBody() string`

GetBody returns the Body field if non-nil, zero value otherwise.

### GetBodyOk

`func (o *TemplateDto) GetBodyOk() (*string, bool)`

GetBodyOk returns a tuple with the Body field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBody

`func (o *TemplateDto) SetBody(v string)`

SetBody sets Body field to given value.

### HasBody

`func (o *TemplateDto) HasBody() bool`

HasBody returns a boolean if a field has been set.

### GetFooter

`func (o *TemplateDto) GetFooter() string`

GetFooter returns the Footer field if non-nil, zero value otherwise.

### GetFooterOk

`func (o *TemplateDto) GetFooterOk() (*string, bool)`

GetFooterOk returns a tuple with the Footer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFooter

`func (o *TemplateDto) SetFooter(v string)`

SetFooter sets Footer field to given value.

### HasFooter

`func (o *TemplateDto) HasFooter() bool`

HasFooter returns a boolean if a field has been set.

### SetFooterNil

`func (o *TemplateDto) SetFooterNil(b bool)`

 SetFooterNil sets the value for Footer to be an explicit nil

### UnsetFooter
`func (o *TemplateDto) UnsetFooter()`

UnsetFooter ensures that no value is present for Footer, not even an explicit nil
### GetFrom

`func (o *TemplateDto) GetFrom() string`

GetFrom returns the From field if non-nil, zero value otherwise.

### GetFromOk

`func (o *TemplateDto) GetFromOk() (*string, bool)`

GetFromOk returns a tuple with the From field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFrom

`func (o *TemplateDto) SetFrom(v string)`

SetFrom sets From field to given value.

### HasFrom

`func (o *TemplateDto) HasFrom() bool`

HasFrom returns a boolean if a field has been set.

### GetReplyTo

`func (o *TemplateDto) GetReplyTo() string`

GetReplyTo returns the ReplyTo field if non-nil, zero value otherwise.

### GetReplyToOk

`func (o *TemplateDto) GetReplyToOk() (*string, bool)`

GetReplyToOk returns a tuple with the ReplyTo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReplyTo

`func (o *TemplateDto) SetReplyTo(v string)`

SetReplyTo sets ReplyTo field to given value.

### HasReplyTo

`func (o *TemplateDto) HasReplyTo() bool`

HasReplyTo returns a boolean if a field has been set.

### GetDescription

`func (o *TemplateDto) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *TemplateDto) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *TemplateDto) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *TemplateDto) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetId

`func (o *TemplateDto) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *TemplateDto) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *TemplateDto) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *TemplateDto) HasId() bool`

HasId returns a boolean if a field has been set.

### GetCreated

`func (o *TemplateDto) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *TemplateDto) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *TemplateDto) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *TemplateDto) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *TemplateDto) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *TemplateDto) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *TemplateDto) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *TemplateDto) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetSlackTemplate

`func (o *TemplateDto) GetSlackTemplate() string`

GetSlackTemplate returns the SlackTemplate field if non-nil, zero value otherwise.

### GetSlackTemplateOk

`func (o *TemplateDto) GetSlackTemplateOk() (*string, bool)`

GetSlackTemplateOk returns a tuple with the SlackTemplate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSlackTemplate

`func (o *TemplateDto) SetSlackTemplate(v string)`

SetSlackTemplate sets SlackTemplate field to given value.

### HasSlackTemplate

`func (o *TemplateDto) HasSlackTemplate() bool`

HasSlackTemplate returns a boolean if a field has been set.

### SetSlackTemplateNil

`func (o *TemplateDto) SetSlackTemplateNil(b bool)`

 SetSlackTemplateNil sets the value for SlackTemplate to be an explicit nil

### UnsetSlackTemplate
`func (o *TemplateDto) UnsetSlackTemplate()`

UnsetSlackTemplate ensures that no value is present for SlackTemplate, not even an explicit nil
### GetTeamsTemplate

`func (o *TemplateDto) GetTeamsTemplate() string`

GetTeamsTemplate returns the TeamsTemplate field if non-nil, zero value otherwise.

### GetTeamsTemplateOk

`func (o *TemplateDto) GetTeamsTemplateOk() (*string, bool)`

GetTeamsTemplateOk returns a tuple with the TeamsTemplate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTeamsTemplate

`func (o *TemplateDto) SetTeamsTemplate(v string)`

SetTeamsTemplate sets TeamsTemplate field to given value.

### HasTeamsTemplate

`func (o *TemplateDto) HasTeamsTemplate() bool`

HasTeamsTemplate returns a boolean if a field has been set.

### SetTeamsTemplateNil

`func (o *TemplateDto) SetTeamsTemplateNil(b bool)`

 SetTeamsTemplateNil sets the value for TeamsTemplate to be an explicit nil

### UnsetTeamsTemplate
`func (o *TemplateDto) UnsetTeamsTemplate()`

UnsetTeamsTemplate ensures that no value is present for TeamsTemplate, not even an explicit nil

