import type { Palette } from '../palette.ts'
import { opacity } from '../utils.ts'

export const getColors = (palette: Palette): Record<string, unknown> => {
  return {
    'editor.background': palette.back,
    'editorCursor.foreground': palette.text,
    'editor.foreground': palette.text,
    'editorWhitespace.foreground': palette.overlay,
    'editor.lineHighlightBackground': opacity(palette.highlight_low, 0.7),
    'editor.selectionBackground': opacity(palette.highlight_high, 0.7),
    'editor.inactiveSelectionBackground': palette.highlight_med,
    'editor.selectionHighlightBackground': palette.highlight_med,
    'editorLineNumber.foreground': palette.accent4,
    'editorLineNumber.activeForeground': palette.subtle,
    'editor.wordHighlightBackground': opacity(palette.highlight_med, 0.6),
    // UI Colors
    foreground: palette.text,
    'textLink.foreground': palette.accent1,
    'activityBar.background': palette.ui,
    'activityBar.foreground': palette.accent3,
    'sideBar.background': palette.ui,
    'statusBar.background': palette.ui,
    'statusBar.debuggingBackground': palette.accent4,
    'statusBarItem.remoteBackground': palette.accent5,
    'titleBar.activeBackground': palette.ui,
    'titleBar.inactiveBackground': palette.ui,
    'tab.activeBackground': palette.overlay,
    'tab.inactiveBackground': palette.ui,
    'tab.border': palette.back,
    'tab.activeBorder': palette.accent4,
    // Editor gutter
    'editorGutter.modifiedBackground': palette.accent3,
    'editorGutter.addedBackground': palette.accent4,
    'editorGutter.deletedBackground': palette.accent6,
    'editorGutter.foldingControlForeground': palette.accent2,
    // Git Colors
    'gitDecoration.addedResourceForeground': palette.accent4,
    'gitDecoration.modifiedResourceForeground': palette.accent3,
    'gitDecoration.deletedResourceForeground': palette.accent6,
    'gitDecoration.renamedResourceForeground': palette.accent4,
    'gitDecoration.stageModifiedResourceForeground': palette.accent4,
    'gitDecoration.stageDeletedResourceForeground': palette.accent4,
    'gitDecoration.untrackedResourceForeground': palette.subtle,
    'gitDecoration.ignoredResourceForeground': palette.muted,
    'gitDecoration.conflictingResourceForeground': palette.accent5,
    'editorGroupHeader.noTabsBackground': palette.ui,
    'editorGroupHeader.tabsBackground': palette.back,
    'progressBar.background': palette.accent1,
    // Minimap Colors
    'minimap.findMatchHighlight': palette.accent3,
    'minimap.selectionHighlight': palette.highlight_high,
    'minimap.errorHighlight': palette.accent6,
    'minimap.warningHighlight': palette.accent5,
    'minimap.selectionOccurrenceHighlight': palette.highlight_med,
    'minimapGutter.addedBackground': palette.accent4,
    'minimapGutter.modifiedBackground': palette.accent3,
    'minimapGutter.deletedBackground': palette.accent6,
    // Breadcrumb Colors
    'breadcrumb.foreground': palette.text,
    'breadcrumb.focusForeground': palette.subtle,
    'breadcrumb.activeSelectionForeground': palette.subtle,
    'breadcrumbPicker.background': palette.ui,
    // Diff Colors
    'diffEditor.insertedTextBackground': opacity(palette.accent4, 0.5),
    'diffEditor.insertedLineBackground': opacity(palette.accent4, 0.4),
    'diffEditorGutter.insertedLineBackground': opacity(palette.accent4, 0.4),
    'diffEditorOverview.insertedForeground': palette.accent4,
    'diffEditor.removedTextBackground': opacity(palette.accent6, 0.5),
    'diffEditor.removedLineBackground': opacity(palette.accent6, 0.4),
    'diffEditorGutter.removedLineBackground': opacity(palette.accent6, 0.4),
    'diffEditorOverview.removedForeground': palette.accent6,
    'diffEditor.diagonalFill': palette.overlay,
    // Merge conflict Colors
    'merge.currentHeaderBackground': opacity(palette.accent1, 0.56),
    'merge.currentContentBackground': opacity(palette.accent1, 0.37),
    'editorOverviewRuler.currentContentForeground': opacity(palette.accent1, 0.56),
    'merge.incomingHeaderBackground': opacity(palette.accent5, 56),
    'merge.incomingContentBackground': opacity(palette.accent5, 0.37),
    'editorOverviewRuler.incomingContentForeground': opacity(palette.accent5, 0.56),
    // Testing Colors
    'testing.iconFailed': palette.accent6,
    'testing.iconErrored': palette.accent6,
    'testing.iconPassed': palette.accent4,
    'testing.runAction': palette.accent2,
    'testing.iconQueued': palette.subtle,
    'testing.iconUnset': palette.muted,
    'testing.iconSkipped': palette.accent3,
    'testing.peekBorder': palette.accent6,
    'testing.peekHeaderBackground': opacity(palette.accent6, 0.6),
    'testing.message.error.decorationForeground': palette.accent6,
    // Debug Colors
    'debugIcon.breakpointForeground': palette.accent6,
    'debugIcon.breakpointDisabledForeground': palette.muted,
    'debugIcon.breakpointCurrentStackframeForeground': palette.accent1,
    'debugIcon.startForeground': palette.accent1,
    'debugIcon.pauseForeground': palette.accent3,
    'debugIcon.stopForeground': palette.accent6,
    'debugIcon.disconnectForeground': palette.accent6,
    'debugIcon.restartForeground': palette.accent4,
    'debugIcon.stepOverForeground': palette.accent3,
    'debugIcon.stepIntoForeground': palette.accent3,
    'debugIcon.stepOutForeground': palette.accent5,
    'debugIcon.continueForeground': palette.accent1,
    'debugIcon.stepBackForeground': palette.accent3,
    'debugConsole.infoForeground': palette.accent2,
    'debugConsole.warningForeground': palette.accent3,
    'debugConsole.errorForeground': palette.accent5,
    'debugConsole.sourceForeground': palette.accent5,
    'debugConsoleInputIcon.foreground': palette.accent1,
    // Inlay Hint Colors
    'editor.inlineSuggest.enabled': true,
    'editorInlayHint.background': opacity(palette.ui, 0.9),
    'editorInlayHint.foreground': palette.subtle,
    // Lists and trees
    'list.activeSelectionBackground': palette.highlight_med,
    'list.inactiveSelectionBackground': opacity(palette.highlight_med, 0.5),
    'list.dropBackground': opacity(palette.highlight_low, 0.8),
    'list.focusBackground': palette.highlight_med,
    'list.hoverBackground': palette.highlight_low,
    'list.warningForeground': palette.accent3,
    'list.errorForeground': palette.accent6,
    // Peek view colors
    'peekView.border': palette.accent1,
    'peekViewEditor.background': palette.ui,
    'peekViewResult.background': palette.overlay,
    'peekViewResult.lineForeground': palette.accent5,
    'peekViewTitle.background': palette.overlay,
    // Sticky scroll
    'editorStickyScroll.shadow': palette.accent6
  }
}
