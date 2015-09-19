# -*- coding: utf-8 -*-
"""Setup tests for this package."""
from nativeflavors.theme.testing import NATIVEFLAVORS_THEME_INTEGRATION_TESTING  # noqa
from plone import api

import unittest2 as unittest


class TestSetup(unittest.TestCase):
    """Test that nativeflavors.theme is properly installed."""

    layer = NATIVEFLAVORS_THEME_INTEGRATION_TESTING

    def setUp(self):
        """Custom shared utility setup for tests."""
        self.portal = self.layer['portal']
        self.installer = api.portal.get_tool('portal_quickinstaller')

    def test_product_installed(self):
        """Test if nativeflavors.theme is installed with portal_quickinstaller."""
        self.assertTrue(self.installer.isProductInstalled('nativeflavors.theme'))

    def test_uninstall(self):
        """Test if nativeflavors.theme is cleanly uninstalled."""
        self.installer.uninstallProducts(['nativeflavors.theme'])
        self.assertFalse(self.installer.isProductInstalled('nativeflavors.theme'))

    def test_browserlayer(self):
        """Test that INativeflavorsThemeLayer is registered."""
        from nativeflavors.theme.interfaces import INativeflavorsThemeLayer
        from plone.browserlayer import utils
        self.assertIn(INativeflavorsThemeLayer, utils.registered_layers())
