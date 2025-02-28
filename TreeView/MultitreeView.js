import React, { useState } from 'react';
import { ChevronRight, ChevronDown, X } from 'lucide-react';
import {
  Checkbox,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  Paper,
  Typography,
  IconButton,
  Box,
  Divider,
  FormControlLabel,
} from '@mui/material';
import { styled } from '@mui/system';

// Custom TreeItem component
const TreeItem = ({ itemId, label, children, selected, onSelect }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = (e) => {
    e.stopPropagation();
    setExpanded(!expanded);
  };

  const handleCheckboxChange = (e) => {
    e.stopPropagation();
    onSelect(itemId, label, !selected);
  };

  return (
    <div className="ml-2">
      <ListItem
        button
        onClick={toggleExpand}
        sx={{ pl: 2, '&:hover': { backgroundColor: 'action.hover' } }}
      >
        {children && (
          <ListItemIcon sx={{ minWidth: 32 }}>
            {expanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </ListItemIcon>
        )}
        {!children && <ListItemIcon sx={{ minWidth: 32 }} />}
        <Checkbox
          edge="start"
          checked={selected}
          tabIndex={-1}
          disableRipple
          onChange={handleCheckboxChange}
          onClick={(e) => e.stopPropagation()}
        />
        <ListItemText primary={label} />
      </ListItem>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {children}
        </List>
      </Collapse>
    </div>
  );
};

// Main component
const TreeSelectComponent = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleNodeSelect = (nodeId, label, isSelected) => {
    if (isSelected) {
      setSelectedItems([...selectedItems, { id: nodeId, label }]);
    } else {
      setSelectedItems(selectedItems.filter((item) => item.id !== nodeId));
    }
  };

  const handleSelectAll = () => {
    if (selectedItems.length === 0) {
      // Get all node IDs
      const allItems = [
        { id: 'grid', label: 'Data Grid' },
        { id: 'grid-community', label: '@mui/x-data-grid' },
        { id: 'grid-pro', label: '@mui/x-data-grid-pro' },
        // { id: 'pickers', label: 'Date and Time Pickers' },
        // { id: 'pickers-community', label: '@mui/x-date-pickers' },
      ];
      setSelectedItems(allItems);
    } else {
      // Deselect all
      setSelectedItems([]);
    }
  };

  const removeItem = (id) => {
    setSelectedItems(selectedItems.filter((item) => item.id !== id));
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Detect clicks outside the component to close dropdown
  React.useEffect(() => {
    if (dropdownOpen) {
      const handleClickOutside = (event) => {
        if (!event.target.closest('.tree-select-container')) {
          setDropdownOpen(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [dropdownOpen]);

  return (
    <Box className="tree-select-container relative w-full max-w-md">
      <Paper
        elevation={1}
        sx={{
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: 1,
          width: '20%',
          p: 1,
          minHeight: 32, // Adjusted to make the input box medium-sized
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          cursor: 'text',
        }}
        onClick={toggleDropdown}
      >
        {selectedItems.length > 0 ? (
          selectedItems.map((item) => (
            <Box
              key={item.id}
              sx={{
                bgcolor: 'background.paper',
                borderRadius: 1,
                m: 0.5,
                px: 1,
                py: 0.25, // Adjusted padding for a smaller chip
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Typography variant="body2">{item.label}</Typography>
              <IconButton
                size="small"
                onClick={(e) => {
                  e.stopPropagation();
                  removeItem(item.id);
                }}
              >
                <X size={14} />
              </IconButton>
            </Box>
          ))
        ) : (
          <Typography variant="body2" color="textSecondary">
            Select items...
          </Typography>
        )}
        <Box sx={{ ml: 'auto' }}>
          <ChevronDown
            className={`transform ${dropdownOpen ? 'rotate-180' : ''} transition-transform`}
            size={16}
          />
        </Box>
        
      </Paper>

      {dropdownOpen && (
        <Paper
          elevation={3}
          sx={{
            position: 'absolute',
            zIndex: 10,
            mt: 1,
            width: '20%',
            bgcolor: 'background.paper',
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: 1,
          }}
        >
          <Box sx={{ minHeight: 352, minWidth: 290, p: 2 }}>
            <List>
              <TreeItem
                itemId="grid"
                label="Data Grid"
                selected={selectedItems.some((item) => item.id === 'grid')}
                onSelect={handleNodeSelect}
              >
                
                <TreeItem
                  itemId="grid-community"
                  label="@mui/x-data-grid"
                  selected={selectedItems.some((item) => item.id === 'grid-community')}
                  onSelect={handleNodeSelect}
                />
                <TreeItem
                  itemId="grid-pro"
                  label="@mui/x-data-grid-pro"
                  selected={selectedItems.some((item) => item.id === 'grid-pro')}
                  onSelect={handleNodeSelect}
                />
              </TreeItem>
              <TreeItem
                itemId="grid"
                label="Data Grid"
                selected={selectedItems.some((item) => item.id === 'grid')}
                onSelect={handleNodeSelect}
              >
                
                <TreeItem
                itemId="grid"
                label="Data Grid"
                selected={selectedItems.some((item) => item.id === 'grid')}
                onSelect={handleNodeSelect}
              >
                
                <TreeItem
                  itemId="grid-community"
                  label="@mui/x-data-grid"
                  selected={selectedItems.some((item) => item.id === 'grid-community')}
                  onSelect={handleNodeSelect}
                />
                <TreeItem
                  itemId="grid-pro"
                  label="@mui/x-data-grid-pro"
                  selected={selectedItems.some((item) => item.id === 'grid-pro')}
                  onSelect={handleNodeSelect}
                />
              </TreeItem>
              </TreeItem>
             
            </List>

            <Divider sx={{ my: 1 }} />
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedItems.length > 0}
                  indeterminate={
                    selectedItems.length > 0 && selectedItems.length < 5
                  }
                  onChange={handleSelectAll}
                />
              }
              label="Select All"
              sx={{ pl: 1 }}
            />
          </Box>
        </Paper>
      )}
    </Box>
  );
};

export default TreeSelectComponent;
