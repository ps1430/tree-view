import * as React from 'react';
import TreeView from '@mui/lab/TreeView';
import {Box} from '@mui/material';
import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import Date from './Date';

const ShowTreeComponent=(props) =>{
  const{children,activeTree,select} = props
   return <div hidden= { activeTree !== select }>
      {activeTree===select && <Box m={2}>{children}</Box>}
   </div>
}
export default function Tview() {
  const[activeTree, setActiveTree]=useState();

  const handleSelect=(e,select)=>{
      
    setActiveTree(select)
  };

  return (

  <Box width="20%">
      <TreeView
        aria-label="file system navigator"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        onNodeSelect={handleSelect}
        sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
      >
        <TreeItem nodeId="1" label="Applications">
          <TreeItem nodeId="2" label="Calendar" />
        </TreeItem>
        <TreeItem nodeId="5" label="Documents">
          <TreeItem nodeId="10" label="OSS" />
          <TreeItem nodeId="6" label="MUI">
            <TreeItem nodeId="8" label="index.js" />
          </TreeItem>
        </TreeItem>
      </TreeView>
      <Box  width="80">
        <ShowTreeComponent activeTree={activeTree} select= "Calendar" >
            <Date/>
          </ShowTreeComponent>

      </Box>
    </Box>
  );
}
