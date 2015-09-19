# -*- coding: utf-8 -*-
from plone.app.robotframework.testing import REMOTE_LIBRARY_BUNDLE_FIXTURE
from plone.app.testing import applyProfile
from plone.app.testing import FunctionalTesting
from plone.app.testing import IntegrationTesting
from plone.app.testing import PLONE_FIXTURE
from plone.app.testing import PloneSandboxLayer
from plone.testing import z2

import nativeflavors.theme


class NativeflavorsThemeLayer(PloneSandboxLayer):

    defaultBases = (PLONE_FIXTURE,)

    def setUpZope(self, app, configurationContext):
        self.loadZCML(package=nativeflavors.theme)

    def setUpPloneSite(self, portal):
        applyProfile(portal, 'nativeflavors.theme:default')


NATIVEFLAVORS_THEME_FIXTURE = NativeflavorsThemeLayer()


NATIVEFLAVORS_THEME_INTEGRATION_TESTING = IntegrationTesting(
    bases=(NATIVEFLAVORS_THEME_FIXTURE,),
    name='NativeflavorsThemeLayer:IntegrationTesting'
)


NATIVEFLAVORS_THEME_FUNCTIONAL_TESTING = FunctionalTesting(
    bases=(NATIVEFLAVORS_THEME_FIXTURE,),
    name='NativeflavorsThemeLayer:FunctionalTesting'
)


NATIVEFLAVORS_THEME_ACCEPTANCE_TESTING = FunctionalTesting(
    bases=(
        NATIVEFLAVORS_THEME_FIXTURE,
        REMOTE_LIBRARY_BUNDLE_FIXTURE,
        z2.ZSERVER_FIXTURE
    ),
    name='NativeflavorsThemeLayer:AcceptanceTesting'
)
