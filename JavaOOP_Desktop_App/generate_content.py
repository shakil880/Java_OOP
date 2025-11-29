"""
Generate complete content.js with all Java files from the Java_OOP project
"""

import os
import json
import re
from manual_outputs import get_manual_output

# Base path
base_path = r"c:\programming\Java_OOP"

# Topic mapping
topics = {
    '01': ('Java OOP Introduction', '01_Java_OOP'),
    '02': ('Classes & Objects', '02_Java_Classes_Objects'),
    '03': ('Class Attributes', '03_Java_Class_Attributes'),
    '04': ('Class Methods', '04_Java_Class_Methods'),
    '05': ('Constructors', '05_Java_Constructors'),
    '06': ('this Keyword', '06_Java_this_Keyword'),
    '07': ('Modifiers', '07_Java_Modifiers'),
    '08': ('Encapsulation', '08_Java_Encapsulation'),
    '09': ('Packages & API', '09_Java_Packages_API'),
    '10': ('Inheritance', '10_Java_Inheritance'),
    '11': ('Polymorphism', '11_Java_Polymorphism'),
    '12': ('super Keyword', '12_Java_super_Keyword'),
    '13': ('Inner Classes', '13_Java_Inner_Classes'),
    '14': ('Abstraction', '14_Java_Abstraction'),
    '15': ('Interface', '15_Java_Interface'),
    '16': ('Enums', '16_Java_Enums'),
    '17': ('User Input', '17_Java_User_Input'),
    '18': ('Date & Time', '18_Java_Date'),
    '19': ('ArrayList', '19_Java_ArrayList'),
    '20': ('HashMap', '20_Java_HashMap'),
}

def escape_js_string(text):
    """Escape text for JavaScript string"""
    # Don't escape backslashes for newlines - we want actual newlines in output
    text = text.replace('`', '\\`')
    text = text.replace('$', '\\$')
    return text

def extract_readme_intro(folder_path):
    """Extract introduction section from README.md"""
    readme_path = os.path.join(folder_path, 'README.md')
    if not os.path.exists(readme_path):
        return None
    
    try:
        with open(readme_path, 'r', encoding='utf-8') as f:
            content = f.read()
            
            # Extract content up to "Example" or "Learning Path" section
            # or take first 800 characters of meaningful content
            lines = content.split('\n')
            intro_lines = []
            skip_title = True
            section_count = 0
            
            for line in lines:
                # Skip the main title
                if skip_title and line.strip().startswith('#'):
                    skip_title = False
                    continue
                
                # Stop at certain sections
                if any(keyword in line for keyword in ['## Example', '## Learning Path', '## Getting Started', '## Topics Covered']):
                    break
                
                # Count sections
                if line.strip().startswith('##'):
                    section_count += 1
                    if section_count > 5:  # Limit to first 5 sections
                        break
                
                intro_lines.append(line)
            
            intro_text = '\n'.join(intro_lines).strip()
            
            # Limit length
            if len(intro_text) > 1500:
                intro_text = intro_text[:1500] + '...'
            
            return intro_text if intro_text else None
    except Exception as e:
        print(f"Error reading README from {folder_path}: {e}")
        return None

def extract_output_from_code(code):
    """Extract expected output from print statements in Java code"""
    output_lines = []
    
    # Find all System.out.println statements
    println_pattern = r'System\.out\.println\((.*?)\);'
    print_pattern = r'System\.out\.print\((.*?)\);'
    
    for match in re.finditer(println_pattern, code, re.DOTALL):
        content = match.group(1).strip()
        # Simple string literals
        if content.startswith('"') and content.endswith('"'):
            line = content[1:-1]
            # Handle escape sequences
            line = line.replace('\\n', '\n')
            line = line.replace('\\"', '"')
            output_lines.append(line)
        # String concatenation with variables (simplified simulation)
        elif '+' in content:
            # This is complex - we'll just indicate output expected
            output_lines.append('[Program output will be displayed here]')
    
    return '\\n'.join(output_lines) if output_lines else '[Run this program to see the output]'

def get_java_files(folder_path, folder_name):
    """Get all Java files from a folder"""
    java_files = []
    if os.path.exists(folder_path):
        for file in os.listdir(folder_path):
            if file.endswith('.java'):
                file_path = os.path.join(folder_path, file)
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        code = f.read()
                        
                        # Try to get manual output first
                        manual_output = get_manual_output(folder_name, file)
                        if manual_output:
                            output = manual_output
                        else:
                            output = extract_output_from_code(code)
                        
                        java_files.append({
                            'name': file,
                            'code': code,
                            'output': output
                        })
                except Exception as e:
                    print(f"Error reading {file}: {e}")
    return java_files

def generate_content_js():
    """Generate the complete content.js file"""
    
    js_content = """// Auto-generated content data with Java files and outputs
// Generated from all Java files in the Java_OOP project

const contentData = {
"""
    
    for topic_num, (title, folder) in topics.items():
        folder_path = os.path.join(base_path, folder)
        java_files = get_java_files(folder_path, folder)
        readme_intro = extract_readme_intro(folder_path)
        
        js_content += f"    '{topic_num}': {{\n"
        js_content += f"        title: '{title}',\n"
        js_content += f"        folder: '{folder}',\n"
        
        # Add introduction if available
        if readme_intro:
            escaped_intro = escape_js_string(readme_intro)
            js_content += f"        introduction: `{escaped_intro}`,\n"
        
        js_content += f"        javaFiles: [\n"
        
        for java_file in java_files:
            escaped_code = escape_js_string(java_file['code'])
            escaped_output = escape_js_string(java_file['output'])
            
            js_content += f"            {{\n"
            js_content += f"                name: '{java_file['name']}',\n"
            js_content += f"                code: `{escaped_code}`,\n"
            js_content += f"                output: `{escaped_output}`\n"
            js_content += f"            }},\n"
        
        js_content += f"        ]\n"
        js_content += f"    }},\n"
    
    js_content += """};

// Export for use in other files
if (typeof window !== 'undefined') {
    window.contentData = contentData;
}
"""
    
    # Write to file
    output_path = os.path.join(base_path, 'JavaOOP_Desktop_App', 'js', 'content.js')
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(js_content)
    
    print(f"✓ Generated content.js successfully!")
    print(f"✓ Location: {output_path}")
    print(f"✓ Processed {len(topics)} topics")

if __name__ == '__main__':
    generate_content_js()
