# BrandingItem

# BrandingItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | name of branding item | [optional] 
**ProductName** | Pointer to **NullableString** | product name | [optional] 
**ActionButtonColor** | Pointer to **NullableString** | hex value of color for action button | [optional] 
**DarkActionButtonColor** | Pointer to **NullableString** | hex value of color for action button in dark mode | [optional] 
**ActiveLinkColor** | Pointer to **NullableString** | hex value of color for link | [optional] 
**DarkActiveLinkColor** | Pointer to **NullableString** | hex value of color for link in dark mode | [optional] 
**NavigationColor** | Pointer to **NullableString** | hex value of color for navigation bar | [optional] 
**DarkNavigationColor** | Pointer to **NullableString** | hex value of color for navigation bar in dark mode | [optional] 
**EmailFromAddress** | Pointer to **NullableString** | email from address | [optional] 
**StandardLogoURL** | Pointer to **NullableString** | url to standard logo | [optional] 
**DarkStandardLogoURL** | Pointer to **NullableString** | url to dark-mode logo | [optional] 
**LoginInformationalMessage** | Pointer to **NullableString** | login information message | [optional] 

## Methods

### NewBrandingItem

`func NewBrandingItem() *BrandingItem`

NewBrandingItem instantiates a new BrandingItem object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBrandingItemWithDefaults

`func NewBrandingItemWithDefaults() *BrandingItem`

NewBrandingItemWithDefaults instantiates a new BrandingItem object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *BrandingItem) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *BrandingItem) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *BrandingItem) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *BrandingItem) HasName() bool`

HasName returns a boolean if a field has been set.

### GetProductName

`func (o *BrandingItem) GetProductName() string`

GetProductName returns the ProductName field if non-nil, zero value otherwise.

### GetProductNameOk

`func (o *BrandingItem) GetProductNameOk() (*string, bool)`

GetProductNameOk returns a tuple with the ProductName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProductName

`func (o *BrandingItem) SetProductName(v string)`

SetProductName sets ProductName field to given value.

### HasProductName

`func (o *BrandingItem) HasProductName() bool`

HasProductName returns a boolean if a field has been set.

### SetProductNameNil

`func (o *BrandingItem) SetProductNameNil(b bool)`

 SetProductNameNil sets the value for ProductName to be an explicit nil

### UnsetProductName
`func (o *BrandingItem) UnsetProductName()`

UnsetProductName ensures that no value is present for ProductName, not even an explicit nil
### GetActionButtonColor

`func (o *BrandingItem) GetActionButtonColor() string`

GetActionButtonColor returns the ActionButtonColor field if non-nil, zero value otherwise.

### GetActionButtonColorOk

`func (o *BrandingItem) GetActionButtonColorOk() (*string, bool)`

GetActionButtonColorOk returns a tuple with the ActionButtonColor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActionButtonColor

`func (o *BrandingItem) SetActionButtonColor(v string)`

SetActionButtonColor sets ActionButtonColor field to given value.

### HasActionButtonColor

`func (o *BrandingItem) HasActionButtonColor() bool`

HasActionButtonColor returns a boolean if a field has been set.

### SetActionButtonColorNil

`func (o *BrandingItem) SetActionButtonColorNil(b bool)`

 SetActionButtonColorNil sets the value for ActionButtonColor to be an explicit nil

### UnsetActionButtonColor
`func (o *BrandingItem) UnsetActionButtonColor()`

UnsetActionButtonColor ensures that no value is present for ActionButtonColor, not even an explicit nil
### GetDarkActionButtonColor

`func (o *BrandingItem) GetDarkActionButtonColor() string`

GetDarkActionButtonColor returns the DarkActionButtonColor field if non-nil, zero value otherwise.

### GetDarkActionButtonColorOk

`func (o *BrandingItem) GetDarkActionButtonColorOk() (*string, bool)`

GetDarkActionButtonColorOk returns a tuple with the DarkActionButtonColor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDarkActionButtonColor

`func (o *BrandingItem) SetDarkActionButtonColor(v string)`

SetDarkActionButtonColor sets DarkActionButtonColor field to given value.

### HasDarkActionButtonColor

`func (o *BrandingItem) HasDarkActionButtonColor() bool`

HasDarkActionButtonColor returns a boolean if a field has been set.

### SetDarkActionButtonColorNil

`func (o *BrandingItem) SetDarkActionButtonColorNil(b bool)`

 SetDarkActionButtonColorNil sets the value for DarkActionButtonColor to be an explicit nil

### UnsetDarkActionButtonColor
`func (o *BrandingItem) UnsetDarkActionButtonColor()`

UnsetDarkActionButtonColor ensures that no value is present for DarkActionButtonColor, not even an explicit nil
### GetActiveLinkColor

`func (o *BrandingItem) GetActiveLinkColor() string`

GetActiveLinkColor returns the ActiveLinkColor field if non-nil, zero value otherwise.

### GetActiveLinkColorOk

`func (o *BrandingItem) GetActiveLinkColorOk() (*string, bool)`

GetActiveLinkColorOk returns a tuple with the ActiveLinkColor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActiveLinkColor

`func (o *BrandingItem) SetActiveLinkColor(v string)`

SetActiveLinkColor sets ActiveLinkColor field to given value.

### HasActiveLinkColor

`func (o *BrandingItem) HasActiveLinkColor() bool`

HasActiveLinkColor returns a boolean if a field has been set.

### SetActiveLinkColorNil

`func (o *BrandingItem) SetActiveLinkColorNil(b bool)`

 SetActiveLinkColorNil sets the value for ActiveLinkColor to be an explicit nil

### UnsetActiveLinkColor
`func (o *BrandingItem) UnsetActiveLinkColor()`

UnsetActiveLinkColor ensures that no value is present for ActiveLinkColor, not even an explicit nil
### GetDarkActiveLinkColor

`func (o *BrandingItem) GetDarkActiveLinkColor() string`

GetDarkActiveLinkColor returns the DarkActiveLinkColor field if non-nil, zero value otherwise.

### GetDarkActiveLinkColorOk

`func (o *BrandingItem) GetDarkActiveLinkColorOk() (*string, bool)`

GetDarkActiveLinkColorOk returns a tuple with the DarkActiveLinkColor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDarkActiveLinkColor

`func (o *BrandingItem) SetDarkActiveLinkColor(v string)`

SetDarkActiveLinkColor sets DarkActiveLinkColor field to given value.

### HasDarkActiveLinkColor

`func (o *BrandingItem) HasDarkActiveLinkColor() bool`

HasDarkActiveLinkColor returns a boolean if a field has been set.

### SetDarkActiveLinkColorNil

`func (o *BrandingItem) SetDarkActiveLinkColorNil(b bool)`

 SetDarkActiveLinkColorNil sets the value for DarkActiveLinkColor to be an explicit nil

### UnsetDarkActiveLinkColor
`func (o *BrandingItem) UnsetDarkActiveLinkColor()`

UnsetDarkActiveLinkColor ensures that no value is present for DarkActiveLinkColor, not even an explicit nil
### GetNavigationColor

`func (o *BrandingItem) GetNavigationColor() string`

GetNavigationColor returns the NavigationColor field if non-nil, zero value otherwise.

### GetNavigationColorOk

`func (o *BrandingItem) GetNavigationColorOk() (*string, bool)`

GetNavigationColorOk returns a tuple with the NavigationColor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNavigationColor

`func (o *BrandingItem) SetNavigationColor(v string)`

SetNavigationColor sets NavigationColor field to given value.

### HasNavigationColor

`func (o *BrandingItem) HasNavigationColor() bool`

HasNavigationColor returns a boolean if a field has been set.

### SetNavigationColorNil

`func (o *BrandingItem) SetNavigationColorNil(b bool)`

 SetNavigationColorNil sets the value for NavigationColor to be an explicit nil

### UnsetNavigationColor
`func (o *BrandingItem) UnsetNavigationColor()`

UnsetNavigationColor ensures that no value is present for NavigationColor, not even an explicit nil
### GetDarkNavigationColor

`func (o *BrandingItem) GetDarkNavigationColor() string`

GetDarkNavigationColor returns the DarkNavigationColor field if non-nil, zero value otherwise.

### GetDarkNavigationColorOk

`func (o *BrandingItem) GetDarkNavigationColorOk() (*string, bool)`

GetDarkNavigationColorOk returns a tuple with the DarkNavigationColor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDarkNavigationColor

`func (o *BrandingItem) SetDarkNavigationColor(v string)`

SetDarkNavigationColor sets DarkNavigationColor field to given value.

### HasDarkNavigationColor

`func (o *BrandingItem) HasDarkNavigationColor() bool`

HasDarkNavigationColor returns a boolean if a field has been set.

### SetDarkNavigationColorNil

`func (o *BrandingItem) SetDarkNavigationColorNil(b bool)`

 SetDarkNavigationColorNil sets the value for DarkNavigationColor to be an explicit nil

### UnsetDarkNavigationColor
`func (o *BrandingItem) UnsetDarkNavigationColor()`

UnsetDarkNavigationColor ensures that no value is present for DarkNavigationColor, not even an explicit nil
### GetEmailFromAddress

`func (o *BrandingItem) GetEmailFromAddress() string`

GetEmailFromAddress returns the EmailFromAddress field if non-nil, zero value otherwise.

### GetEmailFromAddressOk

`func (o *BrandingItem) GetEmailFromAddressOk() (*string, bool)`

GetEmailFromAddressOk returns a tuple with the EmailFromAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailFromAddress

`func (o *BrandingItem) SetEmailFromAddress(v string)`

SetEmailFromAddress sets EmailFromAddress field to given value.

### HasEmailFromAddress

`func (o *BrandingItem) HasEmailFromAddress() bool`

HasEmailFromAddress returns a boolean if a field has been set.

### SetEmailFromAddressNil

`func (o *BrandingItem) SetEmailFromAddressNil(b bool)`

 SetEmailFromAddressNil sets the value for EmailFromAddress to be an explicit nil

### UnsetEmailFromAddress
`func (o *BrandingItem) UnsetEmailFromAddress()`

UnsetEmailFromAddress ensures that no value is present for EmailFromAddress, not even an explicit nil
### GetStandardLogoURL

`func (o *BrandingItem) GetStandardLogoURL() string`

GetStandardLogoURL returns the StandardLogoURL field if non-nil, zero value otherwise.

### GetStandardLogoURLOk

`func (o *BrandingItem) GetStandardLogoURLOk() (*string, bool)`

GetStandardLogoURLOk returns a tuple with the StandardLogoURL field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStandardLogoURL

`func (o *BrandingItem) SetStandardLogoURL(v string)`

SetStandardLogoURL sets StandardLogoURL field to given value.

### HasStandardLogoURL

`func (o *BrandingItem) HasStandardLogoURL() bool`

HasStandardLogoURL returns a boolean if a field has been set.

### SetStandardLogoURLNil

`func (o *BrandingItem) SetStandardLogoURLNil(b bool)`

 SetStandardLogoURLNil sets the value for StandardLogoURL to be an explicit nil

### UnsetStandardLogoURL
`func (o *BrandingItem) UnsetStandardLogoURL()`

UnsetStandardLogoURL ensures that no value is present for StandardLogoURL, not even an explicit nil
### GetDarkStandardLogoURL

`func (o *BrandingItem) GetDarkStandardLogoURL() string`

GetDarkStandardLogoURL returns the DarkStandardLogoURL field if non-nil, zero value otherwise.

### GetDarkStandardLogoURLOk

`func (o *BrandingItem) GetDarkStandardLogoURLOk() (*string, bool)`

GetDarkStandardLogoURLOk returns a tuple with the DarkStandardLogoURL field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDarkStandardLogoURL

`func (o *BrandingItem) SetDarkStandardLogoURL(v string)`

SetDarkStandardLogoURL sets DarkStandardLogoURL field to given value.

### HasDarkStandardLogoURL

`func (o *BrandingItem) HasDarkStandardLogoURL() bool`

HasDarkStandardLogoURL returns a boolean if a field has been set.

### SetDarkStandardLogoURLNil

`func (o *BrandingItem) SetDarkStandardLogoURLNil(b bool)`

 SetDarkStandardLogoURLNil sets the value for DarkStandardLogoURL to be an explicit nil

### UnsetDarkStandardLogoURL
`func (o *BrandingItem) UnsetDarkStandardLogoURL()`

UnsetDarkStandardLogoURL ensures that no value is present for DarkStandardLogoURL, not even an explicit nil
### GetLoginInformationalMessage

`func (o *BrandingItem) GetLoginInformationalMessage() string`

GetLoginInformationalMessage returns the LoginInformationalMessage field if non-nil, zero value otherwise.

### GetLoginInformationalMessageOk

`func (o *BrandingItem) GetLoginInformationalMessageOk() (*string, bool)`

GetLoginInformationalMessageOk returns a tuple with the LoginInformationalMessage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLoginInformationalMessage

`func (o *BrandingItem) SetLoginInformationalMessage(v string)`

SetLoginInformationalMessage sets LoginInformationalMessage field to given value.

### HasLoginInformationalMessage

`func (o *BrandingItem) HasLoginInformationalMessage() bool`

HasLoginInformationalMessage returns a boolean if a field has been set.

### SetLoginInformationalMessageNil

`func (o *BrandingItem) SetLoginInformationalMessageNil(b bool)`

 SetLoginInformationalMessageNil sets the value for LoginInformationalMessage to be an explicit nil

### UnsetLoginInformationalMessage
`func (o *BrandingItem) UnsetLoginInformationalMessage()`

UnsetLoginInformationalMessage ensures that no value is present for LoginInformationalMessage, not even an explicit nil

